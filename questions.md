#### Q1

What is the difference between Component and PureComponent? give an example where it might break my app.

```
Difference between Component and PureComponent is the deep comparison of props and state vs
shallow comparison of props and state, respectively. It may break the app if complex props or
states are used.
```

#### Q2

Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

```
Could produce unexpected behavior or bugs. Context is a global state and shouldComponentUpdate
is a lifecycle method that is used to prevent re-rendering of a component. If the context is
updated, the component will not re-render even if the props or state has changed.
```

#### Q3

Describe 3 ways to pass information from a component to its PARENT.

```
1. Using props
2. Using context
3. Using a callback function
```

#### Q4

Give 2 ways to prevent components from re-rendering.

```
1. shouldComponentUpdate to control re-rendering
2. Using React.memo
```

#### Q5

What is a fragment and why do we need it? Give an example where it might break my app.

```
A fragment is a way to group a list of children without adding extra nodes to the DOM. It may
break the app if the fragment is used in a component that is not expecting a fragment. Most commonly with a library that expects a specific structure.
```

#### Q6

Give 3 examples of the HOC pattern.

```
1. WithAuth
2. WithStyles
3. WithTheme
```

#### Q7

what's the difference in handling exceptions in promises, callbacks and async...await.

```
In promises, the catch method is used to handle exceptions. In callbacks, the error is passed
as the first argument to the callback function. In async...await, the try...catch block is used to handle exceptions.
```

#### Q8

How many arguments does setState take and why is it async.

```
setState takes two arguments, the first is the state object and the second is a callback function.
It is async because it is batched and it is not guaranteed that the state will be updated immediately.
```

#### Q9

List the steps needed to migrate a Class to Function Component.

```
Identify the state variables that are used in the Class Component.

Replace the Class Component with a Function Component.

Remove the constructor method from the Function Component, as it is not needed.

Use the useState() hook to initialize the state variables in the Function Component.

Remove the this keyword from the state variables and the class methods.

Convert class methods to functions

Remove any lifecycle methods (e.g., componentDidMount(), componentDidUpdate(), etc.) and replace them with the appropriate React hooks if needed.

Remove render(): Remove the render() method, as the Function Component should return the JSX directly.

Replace this.props with function arguments: Replace any references to this.props with function arguments.

Add prop types to the Function Component, if needed.
```

#### Q10

List a few ways styles can be used with components.

```
1. Inline styles
2. CSS stylesheets
3. CSS-in-JS
```

#### Q11

How to render an HTML string coming from the server.

```
Use the dangerouslySetInnerHTML prop. Please sanitize the HTML string before rendering it.
```
