import { useAutoCompleteContext } from '@/context/AutoComplete/AutoCompleteContext';

/**
 * For production, I would have employed the use of styled-components to style the input
 * element.
 */

const style = {
  width: '15rem',
  height: '1.6rem',
  fontSize: '1rem',
  padding: '0.2rem',
  border: '1px solid #FFFFFF',
  borderRadius: '5px',
};

const Input = () => {
  const { search, handleSearch, handleOnKeyDown, handleOnBlur } =
    useAutoCompleteContext();

  return (
    <input
      type="text"
      value={search}
      style={style}
      onChange={(e) => handleSearch(e.target.value)}
      onKeyDown={(e) => handleOnKeyDown(e as unknown as KeyboardEvent)}
      onBlur={handleOnBlur}
    />
  );
};

export { Input };
