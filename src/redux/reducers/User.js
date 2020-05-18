import { combineReducers } from "redux";

import {
  BEGIN_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  BEGIN_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../types/User";

const status = (state = "", action) => {
  switch (action.type) {
    case BEGIN_LOGIN:
    case BEGIN_SIGNUP:
      return "loading";
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return "success";
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
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

const reducer = combineReducers({
  status,
  message,
});

export default reducer;
