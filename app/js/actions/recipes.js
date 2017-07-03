import {ADD_RECIPE, SET_RECIPES, FETCH_RECIPES} from '../constants/action-types';

const addRecipe = (name) => ({
  type: ADD_RECIPE, 
  name
});

const setRecipes = (data) => ({
  type: SET_RECIPES, 
  data
});

const fetchRecipes = () => ({
  type: FETCH_RECIPES
});

module.exports = { 
  addRecipe, 
  setRecipes,
  fetchRecipes
};