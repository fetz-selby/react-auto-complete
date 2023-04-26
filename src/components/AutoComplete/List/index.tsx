import { useAutoCompleteContext } from '@/context/AutoComplete/AutoCompleteContext';
import { ListItem } from '@/components/AutoComplete/ListItem';
import { TransitionStates } from '@/context/AutoComplete/AutoCompleteContext.types';
import { ItemProps } from '@/api/api.types';

/**
 * For production, I would have employed the use of styled-components to style the ul
 * element.
 */

const style = {
  display: 'block',
  position: 'absolute',
  width: '25rem',
  maxHeight: '15rem',
  border: '1px solid #555555',
  overflowY: 'auto',
  backgroundColor: '#FFFFFF',
};

const List = () => {
  const { results, transitionState } = useAutoCompleteContext();

  const renderList = () => {
    return results
      ? results?.map(({ id, label }: ItemProps) => (
          <ListItem key={id} id={id} label={label} />
        ))
      : null;
  };

  return transitionState === TransitionStates.SHOWLIST && results?.length ? (
    <div>
      <ul style={style}>{renderList()}</ul>
    </div>
  ) : null;
};

export { List };
