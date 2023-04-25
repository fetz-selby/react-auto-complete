import { Maybe } from '@/types/Maybe';

interface Props {
  text: Maybe<string>;
  highlight: string;
}

const style = (isMatch: boolean) => {
  return { background: isMatch ? '#fff9c4' : '' };
};

const Highlighter = ({ text, highlight }: Props) => {
  const parts = text?.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <p>
      {(parts || [])?.map((part, i) => (
        <span
          key={i}
          style={style(part.toLowerCase() === highlight.toLowerCase())}
        >
          {part}
        </span>
      ))}
    </p>
  );
};

export { Highlighter };
