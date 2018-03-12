import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';  
import { Router, Route, browserHistory } from 'react-router'; 
import {loadUsers} from './actions/userActions';
import configureStore from './store/configureStore'; 

/**
 * Need to import bootstrap css 
 */
import 'bootstrap/dist/css/bootstrap.min.css';

/** 
 * Create redux store object 
*/ 
const store = configureStore();

/**
 * Dispatch actions 
 */
store.dispatch(loadUsers());

ReactDOM.render(
    <Provider store={store}>
        <Router
            path="/"  
            history={browserHistory}>
            <Route path="/app" component={App}/>
        </Router>
    </Provider>
    , 
    document.getElementById('root'));

registerServiceWorker();
