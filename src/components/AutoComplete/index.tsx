import { AutoCompleteProvider } from '@/context/AutoComplete/AutoCompleteContext';

const AutoComplete = () => (
  <AutoCompleteProvider>
    <>
      <AutoCompleteProvider.Error message="Something wrong happened" />
      <AutoCompleteProvider.Input />
      <AutoCompleteProvider.Loading />
      <AutoCompleteProvider.List />
    </>
  </AutoCompleteProvider>
);

export { AutoComplete };
