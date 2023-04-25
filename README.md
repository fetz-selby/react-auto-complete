## About

An auto complete component built with react and typescript. The component is built with the following features in mind:

- Suggestions [ uses include method of matching ]
- Highlighting of matched text
- Clear suggestions/listdrop on blur
- Clear suggestions/listdrop with the escape key
- Has debounce functionality

## App state visualization

Below is the state machine for the app. Interactive visualization can be viewed from [xstate](https://stately.ai/viz) using the code below.

```
const machine = {
  initial: 'idle',
  states: {
    idle: {
      on: {
        SEARCH: 'loading',
      },
    },
    loading: {
      on: {
        SUCCESS: 'showlist',
        ERROR: 'error',
      },
    },
    showlist: {
      on: {
        SEARCH: 'loading',
        CLEAR: 'idle',
        SELECT_ITEM: 'idle',
      },
    },
    error: {
      on: {
        SEARCH: 'loading',
      },
    },
  },
};
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Recommendations

Libraries I would have used for production ready app:

- Handle Styling and Basic UI components: [Material UI](https://mui.com/) / [tailwindcss](https://tailwindcss.com/).
- API and network caching : [useQuery](https://tanstack.com/query/v4/docs/react/reference/useQuery) or [SWR](https://swr.vercel.app/)

## TODO

[] Style the input, droplist, loading and error components
[] Add Error boundary
[] Add tests
