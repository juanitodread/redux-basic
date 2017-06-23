import {createStore} from 'redux';
import reducer from '../reducers/index';

// initial state
const initialState = {
  recipes: [
  ],
  ingredients: [
  ]
};

const store = createStore(reducer, initialState);

module.exports = store;