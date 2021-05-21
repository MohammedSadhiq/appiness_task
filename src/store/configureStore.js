import React from 'react';
import {createStore,combineReducers, applyMiddleware} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import thunk from 'redux-thunk';
import loginReducer from '../Reducers/loginReducers';
import dashboardReducer from '../Reducers/dashboardReducer'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        login:loginReducer,
        users:dashboardReducer
    }),applyMiddleware(thunk))

    return store
}

export default configureStore