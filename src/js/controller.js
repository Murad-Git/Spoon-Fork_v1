import * as model from './model.js';
import results from './views/results.js';
import search from './views/search.js';
import recipe from './views/recipe.js';

// import { async } from 'regenerator-runtime';
// import 'regenerator-runtime/runtime';
// import 'core-js/stable';

const controlRecipes = async function (){
    try {
        const id = window.location.hash.slice(1)
        if(!id) return

        // load recipe
        await model.loadRecipe(id);

        recipe.render(model.state.recipe)
        console.log(model.state.recipe);
    } catch (error) {
        // make error msg rendering
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
    } catch (error) {
        console.error(error);
    }
}

const init =  function(){
    search.searchHandler(controlSearchResults);
    recipe.renderHandler(controlRecipes);
}
init();
