import async from 'regenerator-runtime';
import axios from "axios";

// local database
export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: 10,
        totalResults:0,
        searchAuto:[],
    },
};

export const searchAutocomplete = async function(query){
  try {
    const res1 = await axios({
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete',
      params: {query: query, number: '10'},
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': '45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809'
      }
    });
    state.search.searchAuto = res1.data.map(res=> {
      return {
        id: res.id,
        title: res.title
      }
    });
    // return res1.data.map(rec=>rec.id, rec.title);
  } catch (error) {
    throw error;
  }
}


export const updateServings = function(newServings){
  state.recipe.ingredients.forEach(ing=>{
    ing.amount = (ing.amount*newServings)/state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
  });

  state.recipe.servings = newServings;
};

// save received data into objects
const createRecipeObject = function (recipe){
  const {data} = recipe;
  return {
    id: data.id,
    title: data.title,
    image: `https://spoonacular.com/recipeImages/${data.id}-636x393.${data.imageType}`,
    cookingTime: data.readyInMinutes,
    servings: data.servings,
    originSourceUrl: data.sourceUrl,
    sourceName: data.sourceName,
    cuisines: data.cuisines,
    dishTypes: data.dishTypes,
    instruction: data.instructions,
    summary: data.summary,
    ingredients: data.extendedIngredients,
    cheap: data.cheap,
    vegan: data.vegan,
    vegetarian: data.vegetarian,
    veryHealthy: data.veryHealthy,
    glutenFree: data.glutenFree,
    winePairing: data.winePairing,
  }
}

// load and save full 1 recipe
// id 723984
export const loadRecipe = async function(id ){
  try {
      const res1 = await axios({
        method: "GET",
        url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
        headers: {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
        },
      });
      // console.log(res1.data);
      state.recipe = createRecipeObject(res1);
      // console.log(state.recipe);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// load and save all results by query
export const loadAllSearchResults = async function(query){
  try{
    state.search.query = query
    const res1 = await axios({
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
      params: {
        query: query,
        number: 100,
        offset: 0,
      },
      headers: {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
      },
    });
    // status check
    if(res1.status == 200) console.log(`status: ${res1.status}, data: ${res1.data}`);

    // save total results
    state.search.totalResults = res1.data.totalResults

    state.search.results = res1.data.results.map(rec=>{
      return {
        id : rec.id,
        image : `https://spoonacular.com/recipeImages/${rec.id}-636x393.jpg`,
        cookingTime : rec.readyInMinutes,
        servings : rec.servings,
        sourceUrl : `https://spoonacular.com/${rec.sourceUrl}`,
        title : rec.title,
      }
    });
    // console.log(`results saved: ${state.search.results.map(res=>res.title)}`);
  }
catch (error){
  console.error(`${error} 💥💥💥💥`);
  throw err;
}};


// send 10 results from total results list
export const loadRenderResults = function(page = state.search.page){
  try {
    state.search.page = page;
    const start = (page -1)*state.search.resultsPerPage; //0
    const end = page*state.search.resultsPerPage; //10
    return state.search.results.slice(start, end);
  } catch (error) {
    console.error(error);
  }

}






































