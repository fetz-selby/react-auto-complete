import { AutoCompleteProvider } from '@/context/AutoComplete/AutoCompleteContext';

const AutoComplete = () => (
  <AutoCompleteProvider>
    <>
      <AutoCompleteProvider.Error message="Something wrong happened" />
      <p>Enter name of airport</p>
      <AutoCompleteProvider.Input />
      <AutoCompleteProvider.Loading />
      <AutoCompleteProvider.List />
    </>
  </AutoCompleteProvider>
);

export { AutoComplete };
