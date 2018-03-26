import * as types from '../actions/actionTypes';  
import initialState from '../store/initialState';
import * as modalConst from '../actions/modalConst'; 

export default function modal(state = initialState, action) {
    switch (action.type) {
        case modalConst.SHOW_MODAL:
            return {
                modalType: action.modalType, 
                modalProps: action.modalProps
            }; 
        case modalConst.HIDE_MODAL: 
            return initialState; 
        default:
            return state;
    }
}