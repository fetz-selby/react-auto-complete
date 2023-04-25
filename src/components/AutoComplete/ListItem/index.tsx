import { ItemProps } from '@/api/api.types';
import { Highlighter } from '@/components/Highlighter';
import { useAutoCompleteContext } from '@/context/AutoComplete/AutoCompleteContext';

/**
 * For production, I would have employed the use of styled-components to style the li
 * elements.
 */

const style = {
  cursor: 'pointer',
  padding: '0.5rem',
  borderBottom: '1px solid #ccc',
};

const ListItem = ({ id, label }: ItemProps) => {
  const { search, handleOnItemClicked } = useAutoCompleteContext();

  return (
    <li
      style={style}
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => {
        handleOnItemClicked(id, label);
      }}
      id={id}
    >
      <Highlighter text={label} highlight={search} />
    </li>
  );
};

export { ListItem };
