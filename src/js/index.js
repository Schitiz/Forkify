import Search from './model/Search';
import * as searchView from './view/searchView';
import { elements, renderLoader, clearLoader } from './view/base';

/**ANCHOR Global state of the App ----------------------
 * - Search object
 * - Current Recipe Object
 * - Shopping list objects
 * - Liked recipes
 --------------------------------------------------------*/

const state = {};

const controlSearch = async () => {
  // 1) Get Qeury from searchView
  const query = searchView.getInput();
  //   console.log(query);

  if (query) {
    // 2) New Search object and add to state
    state.search = new Search(query);

    // 3) TODO Prepare UI for result
    searchView.clearInput();
    searchView.clearResList();
    renderLoader(elements.searchRes);

    // 4) Search for recipes
    await state.search.getResults();

    // 5) TODO Render results on UI
    clearLoader();
    searchView.renderResults(state.search.recipes);
  }
};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
