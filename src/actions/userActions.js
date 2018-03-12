import userAPI from '../api/userApi'; 
import * as types from './actionTypes'; 

export function loadUsers() {
    return function(dispatch) {
        return userAPI.getAllUsers()
            .then( users => {
                dispatch(loadUserSuccess(users)); 
            })
            .catch(error => {
                throw(error); 
            }); 
    }; 
}

export function loadUserSuccess(users) {
    console.log('loadUserSuccess', users);
    return {
        type: types.LOAD_USERS_SUCCESS,
        users
    };
}