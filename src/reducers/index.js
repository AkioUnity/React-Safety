import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import drawer from "./drawer";
import user from "./user";
import list from "./list";
import loginReducer from "../container/LoginContainer/reducer";
import moreReducer from "../container/HomeContainer/reducer";

export default ({
  form: formReducer,
  drawer,
  user,
  list,
  moreReducer,
  loginReducer
});
