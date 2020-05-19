import { combineReducers } from "redux";

import {
  BEGIN_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  BEGIN_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  AUTH_SIGNUP_FAIL,
  BEGIN_FIND_USER,
  FIND_USER_FAIL,
  FIND_USER_SUCCESS
} from "../types/User";

const status = (state = "", action) => {
  switch (action.type) {
    case BEGIN_LOGIN:
    case BEGIN_SIGNUP:
    case BEGIN_FIND_USER:
      return "loading";
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case FIND_USER_FAIL:
      return "success";
    case LOGIN_FAIL:
    case AUTH_SIGNUP_FAIL:
    case SIGNUP_FAIL:
    case FIND_USER_SUCCESS:
      return "fail";
    default:
      return state;
  }
};

const message = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const email = (state = "", action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload.email
    case SIGNUP_SUCCESS:
      return action.payload.result.email
    default:
      return state
  }
}

const details = (state = {}, action) => {
  switch (action.type) {
    case FIND_USER_SUCCESS:
      return action.payload.result
    default:
      return state
  }
}

const reducer = combineReducers({
  status,
  message,
  email,
  details
});

export default reducer;
