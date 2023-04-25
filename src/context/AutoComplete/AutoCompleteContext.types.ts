import { ItemProps } from '@/api/api.types';
import { Maybe } from '@/types/Maybe';

export enum TransitionStates {
  IDLE = 'idle',
  LOADING = 'loading',
  SHOWLIST = 'showlist',
  ERROR = 'error',
}

export interface AutoCompleteProviderProps {
  children: JSX.Element;
}

export interface AutoCompleteContextProps {
  transitionState: TransitionStates;
  search: string;
  results: Maybe<ItemProps[]>;
  handleSearch: (search: string) => void;
  handleOnItemClicked: (id: string, label: string) => void;
  handleOnKeyDown: (e: KeyboardEvent) => void;
  handleOnBlur: () => void;
}

export enum ActionEventTypes {
  SEARCH = 'SEARCH',
  SUCCESS = 'SUCCESS',
  CLEAR = 'CLEAR',
  ERROR = 'ERROR',
  SELECT_ITEM = 'SELECT_ITEM',
}

export interface SendActionEventTypes {
  type: ActionEventTypes;
}
