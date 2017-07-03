import $ from 'jquery';
import store from '../../store/store';
import {addRecipe} from '../../actions/recipes';

const updateUI = () => {
  const {recipes} = store.getState();
  const renderRecipe = (recipe) => `<li>${recipe.name}</li>`;

  $('.recipes > ul').html(recipes.map(renderRecipe));
};

const handleAdd = () => {
  const $recipeName = $('.recipes > input');
  store.dispatch(addRecipe($recipeName.val()));
  $recipeName.val('');
};

const loadUI = () => {
  $('#app').append(`
    <div class="recipes">
      <h2>Recipes: </h2>
      <ul></ul>
      <input type="text" />
      <button>Add</button>
    </div>
  `);

  store.subscribe(updateUI);
  $(document).on('click', '.recipes > button', handleAdd);
  updateUI();
};

module.exports = loadUI;