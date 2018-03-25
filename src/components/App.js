import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import UserList from './UserList';
import ModalRoot from './ModalRoot';

class App extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            users: []
        }
    }  

    render() { 
        return (
            <div>
                <ModalRoot />
                <h1>This is my app</h1>
                <UserList/>
            </div>
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
     
    }
} 

/**
 * This is used to subscribe our container object to the store. 
 * By doing this, we will be alerted when state changes. 
 */
export default connect(mapStateToProps, null)(App); 