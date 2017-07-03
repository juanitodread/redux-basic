import $ from 'jquery';
import loadUI from './js/ui/jquery/index';
import {fetchRecipes} from './js/actions/recipes';
import store from './js/store/store';

$(loadUI);

store.dispatch(fetchRecipes());