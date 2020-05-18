import { combineReducers } from "redux";
import { ADD_SELF_TAG, DELETE_SELF_TAG } from "../types/SelfTagDemo";

const avatar = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const displayname = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const from = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const tags = (state = [], action) => {
  switch (action.type) {
    case ADD_SELF_TAG:
      state.push(action.payload);
      return state;
    case DELETE_SELF_TAG:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  avatar,
  displayname,
  from,
  tags,
});

export default reducer;
