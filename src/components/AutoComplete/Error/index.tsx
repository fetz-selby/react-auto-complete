import { useAutoCompleteContext } from '@/context/AutoComplete/AutoCompleteContext';
import { TransitionStates } from '@/context/AutoComplete/AutoCompleteContext.types';

/**
 * For production, I would have employed the use of styled-components to style the p
 * element.
 */

interface ErrorProps {
  message: string;
}

const style = {
  color: 'red',
  fontSize: '1rem',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '1rem',
  margin: '1rem',
  border: '1px solid red',
  borderRadius: '5px',
  backgroundColor: 'rgba(255, 0, 0, 0.1)',
};

const Error = ({ message }: ErrorProps) => {
  const { transitionState } = useAutoCompleteContext();

  return transitionState === TransitionStates.ERROR ? (
    <div>
      <p style={style}>{message}</p>
    </div>
  ) : null;
};

export { Error };
