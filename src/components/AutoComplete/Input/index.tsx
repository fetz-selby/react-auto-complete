import { useAutoCompleteContext } from '@/context/AutoComplete/AutoCompleteContext';

/**
 * For production, I would have employed the use of styled-components to style the input
 * element.
 */

const style = {
  width: '20rem',
  height: '1.6rem',
  fontSize: '1rem',
  padding: '0.2rem',
  border: '1px solid #bebebe',
  borderRadius: '2px',
};

const Input = () => {
  const { search, handleSearch, handleOnKeyDown, handleOnBlur } =
    useAutoCompleteContext();

  return (
    <input
      type="text"
      placeholder="Search for airports..."
      value={search}
      style={style}
      onChange={(e) => handleSearch(e.target.value)}
      onKeyDown={(e) => handleOnKeyDown(e as unknown as KeyboardEvent)}
      onBlur={handleOnBlur}
    />
  );
};

export { Input };
