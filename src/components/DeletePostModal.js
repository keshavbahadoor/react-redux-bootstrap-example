import React, { Component } from 'react'; 
import { connect } from 'react-redux';   
import { Modal, Button } from 'react-bootstrap';
import { hideModal } from '../actions/modalActions'; 

class DeletePostModal extends Component {

    constructor(props) {
        super(props); 
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: true
        };
    }  

    handleClose() {
        this.setState({ show: false });
        this.props.dispatch(hideModal());
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    
 
    render() { 
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.title}</h4>
                    <h5>{this.props.user.name}</h5>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        ); 
    }
}

/**
 * Maps the current application store (state) to this class props 
 * @param {state} state 
 */
function mapStateToProps(state) { 
    // console.log('state', state);
    return {
        users: state.users 
    }
} 

/**
 * This is used to subscribe our container object to the store. 
 * By doing this, we will be alerted when state changes. 
 */
export default connect(mapStateToProps, null)(DeletePostModal); 