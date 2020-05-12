import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from "../reducers";
import APIMiddleware from "../../API/MiddleWare";
import InitialState from "./InitialState";


/* Define logger for debugging here, delete in production phrase */
const logger = store => next => action => {
    console.log('Dispatching', action)
    const result = next(action)
    console.log('Next state', store.getState())
    return result;
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(
        logger,
        APIMiddleware
    )
)

const store = createStore(
    RootReducer,
    InitialState,
    enhancer
)

export default store