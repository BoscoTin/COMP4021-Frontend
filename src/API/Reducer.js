import { combineReducers } from 'redux';
import { API_START, API_END } from './Action';

const APIStatus = (state = {}, action) => {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        isLoadingData: true
      }
    case API_END:
      return {
        ...state,
        isLoadingData: false
      }
    default:
      return state;
  }
}

const APIReducer = combineReducers({
  APIStatus
})

export default APIReducer;