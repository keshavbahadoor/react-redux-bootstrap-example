export function hideModal() {
    return {
        type: 'HIDE_MODAL', 
        modalType: null, 
        modalProps: {}
    }; 
}

export function showDeletePostModal(user) { 
    return {
        type: 'SHOW_MODAL', 
        modalType: 'DELETE_POST', 
        modalProps: {
            title: 'Delete Post Now',
            user
        }
    };
}