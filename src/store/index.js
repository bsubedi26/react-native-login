import { combineReducers } from "redux";
import indicator from './indicator';
import auth from './auth';

export default combineReducers({
    indicator,
    auth
})
