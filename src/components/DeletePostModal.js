import React, { Component } from 'react'; 
import { connect } from 'react-redux';   
import { Modal, Button } from 'react-bootstrap';
import { hideModal } from '../actions/modalActions'; 
import BasicModal from './BasicModal'; 

class DeletePostModal extends Component { 

    handleDeletePost( ) {
        console.log('Deleting post');
        this.props.dispatch(hideModal());
    }
    
 
    render() { 

        const body = (
            <div> 
                <h5>NAME:  {this.props.user.name}</h5>
                <h5>USER:  {this.props.user.username}</h5>
                <h5>EMAIL: {this.props.user.email}</h5>
            </div>
        ); 

        const customButton = (
            <Button
                bsStyle="success"
                onClick={
                    e => this.handleDeletePost() 
                }
            >
                Custom Click
            </Button>
        ); 


        return (
            <BasicModal 
                title={this.props.title} 
                body={body}
                button={customButton}
            />         
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