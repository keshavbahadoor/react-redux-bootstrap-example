import * as modal from './modalConst'; 

export function hideModal() {
    return {
        type: modal.HIDE_MODAL, 
        modalType: null, 
        modalProps: {}
    }; 
}

export function showDeletePostModal(user) { 
    return {
        type: modal.SHOW_MODAL, 
        modalType: modal.DELETE_POST, 
        modalProps: {
            title: 'Delete Post Now',
            user
        }
    };
}