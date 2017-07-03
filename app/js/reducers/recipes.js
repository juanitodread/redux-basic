import {ADD_RECIPE, SET_RECIPES} from '../constants/action-types';

const recipesReducer = (recipes = [], action) => {
  switch(action.type) {
    case ADD_RECIPE:
      return recipes.concat({name: action.name});

    case SET_RECIPES:
      return action.data.recipes;
  }

  return recipes;
};

module.exports = recipesReducer;