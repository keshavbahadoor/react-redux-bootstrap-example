import React, { Component } from 'react'; 
import { connect } from 'react-redux';   
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import { hideModal } from '../actions/modalActions'; 


class BasicModal extends Component {

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
        console.log('basic modal props', this.props);
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{ this.props.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { this.props.body }                
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup> 
                        { this.props.button }
                        <Button onClick={this.handleClose}>Close</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        ); 
    }
}
 
export default connect(null, null)(BasicModal);  