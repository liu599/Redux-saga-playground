## A study for redux-saga

Redux-saga is a very good tool for re-structure api calls in the project.

This repository is a note for studying redux-saga.

> [React I](https://medium.freecodecamp.org/async-operations-using-redux-saga-2ba02ae077b3)

> [Common Pattern](https://medium.com/shiftgig-blog/redux-saga-common-patterns-48437892e11c)

> https://medium.com/@xanf/vuex-meets-redux-saga-e9c6b46555e

### C0. Definitions

- **Fork**: performs a non-blocking operation on the function passed.
- **Take**: pauses until action received.
- **Race**: runs effects simultaneously, then cancels them all once one finishes.
- **Call**: runs a function. If it returns a promise, pauses the saga until the promise is resolved.
- **Put**: dispatches an action.
- **Select**: Runs a selector function to get data from the state
- **takeLatest**: means we are going to execute the operations, then return only the results of the last one call. If we trigger several cases, it’s going to ignore all of them except the last one.
- **takeEvery**: will return results for all the calls triggered.

### C1. Make sequence calls

### C2. Non-blocking (Synchronously)

### C3. Non-sequence & Non-blocking

## License

No License