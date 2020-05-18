import { combineReducers } from 'redux';

/* Import all reducers from different files */
import APIReducer from "../../API/Reducer"
import TestReducer from "./TestReducer"
import DemoTagsReducer from "./SelfTagDemo"

const rootReducer = combineReducers({
    API: APIReducer,
    test: TestReducer,
    self: DemoTagsReducer
})

export default rootReducer