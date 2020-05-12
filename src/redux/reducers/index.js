import { combineReducers } from 'redux';

/* Import all reducers from different files */
import APIReducer from "../../API/Reducer"
import TestReducer from "./TestReducer"

const rootReducer = combineReducers({
    API: APIReducer,
    test: TestReducer
})

export default rootReducer