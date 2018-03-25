import React, { Component } from 'react';  
import { connect } from 'react-redux'; 
import DeletePostModal from './DeletePostModal';

const MODAL_COMPONENTS = {
    'DELETE_POST': DeletePostModal 
    /* other modals */
};  
  
const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType) {
      return null;
    }
  
    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />
}
  
export default connect(state => state.modal)(ModalRoot); 