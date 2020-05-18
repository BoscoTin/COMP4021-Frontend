import { combineReducers } from "redux";
import { BEGIN_TEST, TEST_SUCCESS, TEST_FAIL } from "../types/TestAction";

const test_state = (state = "", action) => {
  switch (action.type) {
    case BEGIN_TEST:
      return "loading";
    case TEST_SUCCESS:
      return "success";
    case TEST_FAIL:
      return "fail";
    default:
      return state;
  }
};

const test_payload = (state = {}, action) => {
  switch (action.type) {
    case BEGIN_TEST:
      return {};
    case TEST_SUCCESS:
    case TEST_FAIL:
      return action.payload;
    default:
      return state;
  }
};

const reducer = combineReducers({
  test_state,
  test_payload,
});

export default reducer;
