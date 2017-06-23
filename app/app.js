import store from './js/store/store';
import addRecipe from './js/actions/recipes';
import addIngredient from './js/actions/ingredients';

store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Pancake', 'Eggs', 2));

window.store = store;