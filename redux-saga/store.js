import { legacy_createStore as createStore } from "redux";
import  testReducer  from './reducer';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(testReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);


export default store;