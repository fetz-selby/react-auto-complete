import { useAutoCompleteContext } from '@/context/AutoComplete/AutoCompleteContext';
import { TransitionStates } from '@/context/AutoComplete/AutoCompleteContext.types';

/**
 * For production, I would have employed the use of styled-components to style the p
 * element.
 */

const Loading = () => {
  const { transitionState } = useAutoCompleteContext();

  return transitionState === TransitionStates.LOADING ? (
    <p>
      <span>Loading...</span>
    </p>
  ) : null;
};

export { Loading };
