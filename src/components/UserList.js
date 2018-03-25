import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { Table, Button } from 'react-bootstrap'; 
import {loadUsers} from '../actions/userActions';
import { showDeletePostModal } from '../actions/modalActions';


class UserTable extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            users: []
        }
    } 

    componentDidMount() {        
        this.props.dispatch(loadUsers());
    }

    viewPostsButtonClick( user ) {
        console.log('view posts', user); 
        this.props.dispatch(showDeletePostModal(user)); 
    }

    render() {

        /** 
         * Why Keys are important in reactjs: 
         * https://blog.arkency.com/2014/10/react-dot-js-and-dynamic-children-why-the-keys-are-important/
        */
        const users =  this.props.users.map((user, i) =>(
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><Button bsStyle="primary"
                        onClick={ e => this.viewPostsButtonClick(user) }
                    >
                    View Posts                
                </Button></td>
            </tr>
        )); 

        return (
            <div>
                <h2>Users</h2>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>                        
                        <th>Username</th>
                        <th>Email</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        { users }
                    </tbody>
                </Table>
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
        users: state.users 
    }
} 

/**
 * This is used to subscribe our container object to the store. 
 * By doing this, we will be alerted when state changes. 
 */
export default connect(mapStateToProps, null)(UserTable); 