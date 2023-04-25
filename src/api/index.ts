import { ItemProps } from './api.types';

const getSuggestions = async (query: string) => {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await fetch(`./data.json`, options);
    const data = await res.json();
    if (data) {
      const { data: results } = data;
      const filteredResults = results.filter((item: ItemProps) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
      return filteredResults;
    }
  } catch (e) {
    console.error(e);
    throw new Error('Error fetching data');
  }
};

export { getSuggestions };
