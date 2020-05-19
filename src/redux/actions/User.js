import { runAPI } from "../../API/Action";

import {
  BEGIN_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  BEGIN_SIGNUP,
  AUTH_SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  BEGIN_FIND_USER,
  FIND_USER_SUCCESS,
  FIND_USER_FAIL,
} from "../types/User";

export function begin_find_user() {
  return { type: BEGIN_FIND_USER };
}

export function find_user(email) {
  return runAPI(
    `/user/findByEmail?email=${email}`,
    "GET",
    success_find_user,
    fail_find_user
  );
}

function success_find_user(payload) {
  return { type: FIND_USER_SUCCESS, payload };
}

function fail_find_user(payload) {
  return { type: FIND_USER_FAIL, payload };
}

export function begin_login() {
  return { type: BEGIN_LOGIN };
}

export function load_login(email, password) {
  return runAPI("/auth/signin", "POST", success_login, fail_login, {
    groupid: 777,
    email,
    password,
  });
}

function success_login(payload) {
  return { type: LOGIN_SUCCESS, payload };
}

function fail_login(payload) {
  return { type: LOGIN_FAIL, payload };
}

export function begin_signup() {
  return { type: BEGIN_SIGNUP };
}

export function load_signup(states) {
  return runAPI(
    "/auth/signup",
    "POST",
    success_auth_signup(states),
    fail_auth_signup,
    {
      groupid: 777,
      ...states,
    }
  );
}

function success_auth_signup(states) {
  return (payload) =>
    runAPI("/user/create", "POST", success_signup, fail_signup, {
      groupid: 777,
      ...states,
    });
}

function success_signup(payload) {
  return { type: SIGNUP_SUCCESS, payload };
}

function fail_auth_signup(payload) {
  return { type: AUTH_SIGNUP_FAIL, payload };
}

function fail_signup(payload) {
  return { type: SIGNUP_FAIL, payload };
}
