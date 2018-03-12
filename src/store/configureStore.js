import {createStore, applyMiddleware} from 'redux';  
import thunk from 'redux-thunk';
import combineReducers from '../reducers';

/** 
 * Connects our store to the combined reducers 
*/
export default function configureStore() { 

    /**
     * Takes params: root reducer, our initial state, and any middleware 
     */
    return createStore(
        combineReducers,
        applyMiddleware(thunk)
    );
}