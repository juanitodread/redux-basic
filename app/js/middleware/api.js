import {FETCH_RECIPES} from '../constants/action-types';
import {setRecipes} from '../actions/recipes';

const URL = 'https://s3.amazonaws.com/500tech-shared/db.json';

const fetchData = (url, callback) => {
  fetch(url)
    .then(response => {
      if(response.status !== 200) {
        console.log(`Error fetching recipes: ${response.status}`);
      } else {
        response.json().then(callback);
      }
    }).catch(err => console.log(`Error fetching recipes: ${err}`));
};

const apiMiddleware = ({dispatch}) => next => action => {
  if(action.type === FETCH_RECIPES) {
    fetchData(URL, data => dispatch(setRecipes(data)));
  }

  next(action);
};

module.exports = apiMiddleware;