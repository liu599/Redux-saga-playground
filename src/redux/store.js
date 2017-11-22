import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
// eslint-disable-next-line
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from '../sagas/rootSaga'

// add middleware
let initialState = {
  user: {},
  dashboard: {}
};
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let finalCreateStore = composeEnhancers(
  applyMiddleware(createLogger(), sagaMiddleware)
)(createStore)(rootReducer, initialState);

export default finalCreateStore;

sagaMiddleware.run(rootSaga);