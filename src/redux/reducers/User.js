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
  FIND_USER_SUCCESS,
  BEGIN_ADD_SELF_TAG,
  ADD_SELF_TAG_SUCCESS,
  ADD_SELF_TAG_FAIL
} from "../types/User";
import { ADD_SELF_TAG } from "../types/SelfTagDemo";

const status = (state = "", action) => {
  switch (action.type) {
    case BEGIN_LOGIN:
    case BEGIN_SIGNUP:
    case BEGIN_FIND_USER:
      return "loading";
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
    case FIND_USER_SUCCESS:
      return "success";
    case LOGIN_FAIL:
    case AUTH_SIGNUP_FAIL:
    case SIGNUP_FAIL:
    case FIND_USER_FAIL:
      return "fail";
    default:
      return state;
  }
};

const message = (state = "", action) => {
  switch (action.type) {
    case SIGNUP_FAIL:
      return "SIGN UP ERROR, please try again."
    case AUTH_SIGNUP_FAIL:
      return "SIGN UP ERROR, change your email or check if any blanked column exist!"
    default:
      return "";
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
    case ADD_SELF_TAG_SUCCESS:
      var newstate = {
        ...state,
        tags: action.tags
      }
      return newstate
    default:
      return state
  }
}

const edit_state = (state = "", action) => {
  switch (action.type) {
    case BEGIN_ADD_SELF_TAG:
      return "loading"
    case ADD_SELF_TAG_SUCCESS:
      return "success"
    case ADD_SELF_TAG_FAIL:
      return "fail"
    default:
      return state
  }
}

const reducer = combineReducers({
  status,
  message,
  email,
  details,
  edit_state
});

export default reducer;
