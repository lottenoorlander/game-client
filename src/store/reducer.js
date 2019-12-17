import { combineReducers } from "redux";
import AuthReducer from "./auth/reducer";
import gameroomReducer from "./gameroom/reducer";

export default combineReducers({
  auth: AuthReducer,
  gamerooms: gameroomReducer
});
