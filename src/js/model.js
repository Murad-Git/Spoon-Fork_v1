import async from 'regenerator-runtime';
import axios from "axios";

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: 10,
    },
};

// TODO: Implement
// need to finish loading recipe
// 
export const loadRecipe = async function(id){
  try {
      const res1 = {
        method: "GET",
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
        headers: {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
        },
      };

      axios.request(res1).then(function (response) {
        console.log(response.data);
        state.recipe.title = response.data.title;
        state.recipe.image = response.data.image;
        state.recipe.cookingTime = response.data.title;
        state.recipe.servings = response.data.title;
        state.recipe.sourceUrl = response.data.title;
        state.recipe.sourceName = response.data.title;
        state.recipe.cousin = response.data.title;
        state.recipe.dishType = response.data.title;
        state.recipe.instruction = response.data.title;
        state.recipe.summary = response.data.title;
        state.recipe.ingredients = response.data.title;
        state.recipe.cheap = response.data.data.title;
        state.recipe.vegan = response.data.title;
        state.recipe.vegetarian = response.data.title;
        state.recipe.veryHealthy = response.data.title;
        state.recipe.glutenFree = response.data.title;
        state.recipe.glutenFree = response.data.title;
      });
      console.log(state.recipe);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const loadSearchResults = async function(query){
  try{
    const res1 = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
      params: {
        query: query,
        number: 10,
        offset: 0,
      },
      headers: {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
      },
    };
    axios.request(res1).then(function (response) {
      console.log(response.data);
      state.search.results = response.data.results.map(rec=>{
        return {
          id : rec.id,
          image : `https://spoonacular.com/recipeImages/${rec.image}`,
          cookingTime : rec.readyInMinutes,
          servings : rec.servings,
          sourceUrl : `https://spoonacular.com/${rec.sourceUrl}`,
          title : rec.title,
        }
      })
 
      console.log(state.search.results);
    })
  }
catch (error){
  console.error(`${error} 💥💥💥💥`);
  throw err;
}}











































