import * as model from './model.js';
import results from './views/results.js';
import search from './views/search.js';
import recipe from './views/recipe.js';
import pagination from './views/pagination.js';

// import { async } from 'regenerator-runtime';
// import 'regenerator-runtime/runtime';
// import 'core-js/stable';

const controlServings = function (newServings) {
    try {
        // update ingredients number in state
        console.log(`newServings in controller: ${newServings}`);
        model.updateServings(newServings);

        // render new ingredients number
        recipe.update(model.state.recipe);
    } catch (error) {
        console.error(error);
    }
};

const controlPagination = async function (page){
    try {

        // render next results
        results.render(model.loadRenderResults(page));

        // render pagination buttons
        pagination.render(model.state.search);

    } catch (error) {
        console.error(error);
    }
}

const controlRecipes = async function (){
    try {
        // save recipe id from address
        const id = window.location.hash.slice(1)
        if(!id) return

        // mark selected recipe from results 
        // results.update(model.loadRenderResults())

        // load recipe
        await model.loadRecipe(id);

        // render one recipe
        recipe.render(model.state.recipe);
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
        await model.loadAllSearchResults(query);
        
        // rendering results
        await results.render(model.loadRenderResults());

        // render pagination buttons
        pagination.render(model.state.search);

    } catch (error) {
        console.error(error);
    }
}

const init =  function(){
    search.searchHandler(controlSearchResults);
    recipe.renderHandler(controlRecipes);
    pagination.addHandlerPage(controlPagination);
    recipe.servingsHandler(controlServings);
    recipe.servingsHandlerInput(controlServings);
}
init();
