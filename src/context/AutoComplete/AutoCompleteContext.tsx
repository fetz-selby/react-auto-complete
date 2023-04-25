import React, { createContext, useState, useContext, useCallback } from 'react';
import { getSuggestions } from '@/api';
import { List } from '@/components/AutoComplete/List';
import { Input } from '@/components/AutoComplete/Input';
import { Error } from '@/components/AutoComplete/Error';
import { Loading } from '@/components/AutoComplete/Loading';
import { machineTransition } from './AutoCompleteContext.transition';
import debounce from 'lodash.debounce';
import {
  AutoCompleteContextProps,
  AutoCompleteProviderProps,
  SendActionEventTypes,
  ActionEventTypes,
  TransitionStates,
} from './AutoCompleteContext.types';

const initialState = {
  transitionState: TransitionStates.IDLE,
  search: '',
  results: [],
  handleSearch: (_: string) => {},
  handleOnItemClicked: (_: string, __: string) => {},
  handleOnKeyDown: (_: KeyboardEvent) => {},
  handleOnBlur: () => {},
};

const AutoCompleteContext =
  createContext<AutoCompleteContextProps>(initialState);

const useAutoCompleteContext = () => useContext(AutoCompleteContext);
const DELAY = 1500;

let debounceRef: ReturnType<typeof debounce> | null = null;

const AutoCompleteProvider = ({ children }: AutoCompleteProviderProps) => {
  const [state, setState] = useState<AutoCompleteContextProps>(initialState);

  const send = useCallback((event: SendActionEventTypes) => {
    setState((prev) => machineTransition(prev, event));
  }, []);

  const fetchResults = async (search: string) => {
    send({ type: ActionEventTypes.SEARCH });
    try {
      /**
       * In a real world scenario, this would be an API call made with react-query or SWR
       * to handle caching, race conditions, and other edge cases.
       */
      const results = await getSuggestions(search);
      setState((prevState) => ({ ...prevState, results }));
      send({ type: ActionEventTypes.SUCCESS });
    } catch (e) {
      send({ type: ActionEventTypes.ERROR });
      /**
       * Log the error to an observablity or error reporting service like Sentry,
       * dataDog, Bugsnag and etc.
       */
      console.error('Error fetching results, ', e);
    }
  };

  const makeRequest = (search: string) => {
    /**
     * Instend of using a let to store the debounceRef, I could have also used a useRef hook.
     * I chose to use a let because it is more concise and easier to read.
     */
    debounceRef?.cancel();
    debounceRef = debounce(fetchResults, DELAY);
    debounceRef(search);
  };

  const handleSearch = (search: string) => {
    setState({ ...state, search });

    if (search) {
      makeRequest(search);
    } else {
      send({ type: ActionEventTypes.CLEAR });
    }
  };

  const handleOnItemClicked = (_: string, label: string) => {
    setState({ ...state, search: label });
    send({ type: ActionEventTypes.SELECT_ITEM });
  };

  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      send({ type: ActionEventTypes.CLEAR });
    }
  };

  const handleOnBlur = () => {
    send({ type: ActionEventTypes.CLEAR });
  };

  const { search, results, transitionState } = state;

  return (
    <AutoCompleteContext.Provider
      value={{
        transitionState,
        search,
        results,
        handleSearch,
        handleOnItemClicked,
        handleOnKeyDown,
        handleOnBlur,
      }}
    >
      {children}
    </AutoCompleteContext.Provider>
  );
};

/**
 * Compounding all the components into one object to make it easier to import
 */

AutoCompleteProvider.List = List;
AutoCompleteProvider.Input = Input;
AutoCompleteProvider.Error = Error;
AutoCompleteProvider.Loading = Loading;

export { AutoCompleteProvider, useAutoCompleteContext };
