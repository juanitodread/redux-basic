import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import logMiddleware from '../middleware/log';
import apiMiddleware from '../middleware/api';

// initial state
const initialState = {
  recipes: [
  ],
  ingredients: [
  ]
};

const store = createStore(
  reducer, 
  initialState, 
  applyMiddleware(logMiddleware, apiMiddleware)
);

module.exports = store;