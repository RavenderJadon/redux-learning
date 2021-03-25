import counterReducer from "./count";
import loginReducer from "./login";
import userDataReducer from "./userData";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  loginReducer,
  userDataReducer,
});

export default allReducers;
