1. What problem does the context API help solve?
The Context API provides a way to pass specific components props when needed. It eliminates the need to props drill.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is a centralized place where state can be ’stored’. Actions hold all the functionality, Javascript logic, and asynchronous calls needed. The reducer filters the actions and updates states.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is state that need to be applied to something on a more global scale like if user has dark mode on, their view of the entire app is changed. Component state only relates to the state of a specific component that doesn’t need to be shared all over the app like information entered into a form.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A thunk is a function that returns another function that returns a specified object. Thunks exist to handle asynchronous calls. The flow control of the thunk is based on micro-states of the information moving in the asynchronous call.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Context API because it bundles away a lot of the complexity of Redux and thunks.
