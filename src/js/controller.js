import * as model from './model.js'
import results from './views/results.js'
import search from './views/search.js';


import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const controlRecipes = async function (){
    try {
        const id = window.location.hash.slice(1);
        console.log(`recipe id from controlRec: ${id}`);

        // load recipe
        await model.loadRecipe(id);
    } catch (error) {
        console.error(error);
    }
}

const controlSearchResults = async function(){
    try {
        // get user's search
        const query = search.getQuery();
        if(!query) return

        // send it to search function
        await model.loadSearchResults(query);

        // rendering results
        results.render(model.state.search.results);
    }
    catch (error) {
        console.error(error);
    }
}
// controlSearchResults();

const init =  function(){
    search.searchHandler(controlSearchResults);
}
init();
