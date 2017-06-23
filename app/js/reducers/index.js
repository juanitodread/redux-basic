import recipesReducer from './recipes';
import ingredientsReducer from './ingredients';

const reducer = (state, action) => {
  return Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientsReducer(state.ingredients, action)
  });
};

module.exports = reducer;