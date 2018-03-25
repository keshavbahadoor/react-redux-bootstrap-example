import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';  
import { Router, Route, browserHistory } from 'react-router';  
import configureStore from './store/configureStore'; 
 

/** 
 * Create redux store object 
*/ 
const store = configureStore();
 

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
