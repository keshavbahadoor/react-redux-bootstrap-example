import { combineReducers } from "redux";
import users from './userReducer';
import modal from './modalReducers'; 

export default combineReducers({
    modal, 
    users
}); 

