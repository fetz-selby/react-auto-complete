## About

An auto complete component built with react and typescript. The component is built with the following features in mind:

- Suggestions [ uses include method of matching ]
- Highlighting of matched text
- Clear suggestions/listdrop on blur
- Clear suggestions/listdrop with the escape key
- Has debounce functionality

## App state visualization
The diagram below shows the visualization of the state and transitions for the auto-complete component. State transitions are driven
by events and they are finite.

![Screenshot 2023-04-25 at 23 07 05](https://user-images.githubusercontent.com/6938921/234409225-17baf4ad-2d8e-4f5b-8f18-eb7053bfad6a.png)


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

## Auto complete view state
#### idle state
![Screenshot 2023-04-26 at 18 56 39](https://user-images.githubusercontent.com/6938921/234650615-9a61a729-b920-4b94-90ca-0da5ae7d32ef.png)

#### loading state
![Screenshot 2023-04-26 at 19 02 39](https://user-images.githubusercontent.com/6938921/234650916-103de6af-434b-4393-afff-23a526d824d5.png)

#### showlist state
![Screenshot 2023-04-26 at 19 03 24](https://user-images.githubusercontent.com/6938921/234651102-1fb433ab-c434-49ab-b084-524a23f96d61.png)

#### error state
![Screenshot 2023-04-26 at 18 58 29](https://user-images.githubusercontent.com/6938921/234651370-aed0663f-cb0a-4b0e-99e5-459d251cce81.png)


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Recommendations

Libraries I would have used for production ready app:

- Handle Styling and Basic UI components: [Material UI](https://mui.com/) / [tailwindcss](https://tailwindcss.com/).
- API and network caching : [useQuery](https://tanstack.com/query/v4/docs/react/reference/useQuery) / [SWR](https://swr.vercel.app/)

## TODO

- [ ] Style the input, droplist, loading and error components
- [ ] Add Error boundary
- [ ] Add tests


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
