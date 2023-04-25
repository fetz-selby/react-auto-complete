import {
  AutoCompleteContextProps,
  SendActionEventTypes,
  TransitionStates,
} from './AutoCompleteContext.types';

/**
 * This is a state machine for the auto-complete component. It declares and
 * defines the finite states and uses events driven actions to transitions between states.
 */

const machine = {
  initial: TransitionStates.IDLE,
  states: {
    idle: {
      on: {
        SEARCH: TransitionStates.LOADING,
      },
    },
    loading: {
      on: {
        SUCCESS: TransitionStates.SHOWLIST,
        ERROR: TransitionStates.ERROR,
      },
    },
    showlist: {
      on: {
        SEARCH: TransitionStates.LOADING,
        CLEAR: TransitionStates.IDLE,
        SELECT_ITEM: TransitionStates.IDLE,
      },
    },
    error: {
      on: {
        SEARCH: TransitionStates.LOADING,
      },
    },
  },
};

const machineTransition = (
  state: AutoCompleteContextProps,
  event: SendActionEventTypes
) => {
  const nextTransitionState =
    // @ts-ignore
    machine.states[state.transitionState].on?.[event.type];

  if (!nextTransitionState) {
    return state;
  }

  return {
    ...state,
    transitionState: nextTransitionState as TransitionStates,
  };
};

export { machineTransition };
