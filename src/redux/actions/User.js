import { runAPI } from "../../API/Action";

import {
  BEGIN_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  BEGIN_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../types/User";

export function begin_login() {
  return {
    type: BEGIN_LOGIN,
  };
}

export function load_login(id, email, password) {
  return runAPI("/auth/signin", "POST", success_login, fail_login, {
    id,
    email,
    password,
  });
}

function success_login(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

function fail_login(payload) {
  return {
    type: LOGIN_FAIL,
    payload,
  };
}

export function begin_signup() {
  return { type: BEGIN_SIGNUP };
}

export function load_signup(data) {
  return runAPI("/auth/signup", "POST", success_signup, fail_signup, data);
}

function success_signup(payload) {
  return { type: SIGNUP_SUCCESS, payload };
}

function fail_signup(payload) {
  return { type: SIGNUP_FAIL, payload };
}
