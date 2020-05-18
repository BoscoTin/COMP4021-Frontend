import { DELETE_SELF_TAG, ADD_SELF_TAG } from "../types/SelfTagDemo";

export function del_self_tag(data) {
  return {
    type: DELETE_SELF_TAG,
    payload: data,
  };
}

export function add_self_tag(data) {
  return {
    type: ADD_SELF_TAG,
    payload: data,
  };
}
