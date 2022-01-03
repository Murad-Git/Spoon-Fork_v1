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

const createRecipeObject = function (data){
  const {recipe} = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    cookingTime: recipe.readyInMinutes,
    servings: recipe.servings,
    originSourceUrl: recipe.sourceUrl,
    sourceName: recipe.sourceName,
    cuisines: recipe.cuisines,
    dishTypes: recipe.dishTypes,
    instruction: recipe.instructions,
    summary: recipe.summary,
    ingredients: recipe.extendedIngredients,
    cheap: recipe.cheap,
    vegan: recipe.vegan,
    vegetarian: recipe.vegetarian,
    veryHealthy: recipe.veryHealthy,
    glutenFree: recipe.glutenFree,
    winePairing: recipe.winePairing,
  }
}

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
      state.recipe = createRecipeObject(res1)
        // state.recipe.id = res1.data.id;
        // state.recipe.title = res1.data.title;
        // state.recipe.image = res1.data.image;
        // state.recipe.cookingTime = res1.data.readyInMinutes;
        // state.recipe.servings = res1.data.servings;
        // state.recipe.originSourceUrl = res1.data.sourceUrl;
        // state.recipe.sourceName = res1.data.sourceName;
        // state.recipe.cuisines = res1.data.cuisines;
        // state.recipe.dishTypes = res1.data.dishTypes;
        // state.recipe.instruction = res1.data.instructions;
        // state.recipe.summary = res1.data.summary;
        // state.recipe.ingredients = res1.data.extendedIngredients;
        // state.recipe.cheap = res1.data.cheap;
        // state.recipe.vegan = res1.data.vegan;
        // state.recipe.vegetarian = res1.data.vegetarian;
        // state.recipe.veryHealthy = res1.data.veryHealthy;
        // state.recipe.glutenFree = res1.data.glutenFree;
        // state.recipe.winePairing = res1.data.winePairing;
        // winePairing.pairedWines[], winePairing.pairingText, winePairing.productMatches[]. 
      console.log(`recipe saved: ${state.recipe}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const loadSearchResults = async function(query){
  try{
    const res1 = await axios({
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
    });

    if(res1.status == 200) console.log(`status: ${res1.status}, data: ${res1.data}`);
    state.search.results = res1.data.results.map(rec=>{
      return {
        id : rec.id,
        image : `https://spoonacular.com/recipeImages/${rec.image}`,
        cookingTime : rec.readyInMinutes,
        servings : rec.servings,
        sourceUrl : `https://spoonacular.com/${rec.sourceUrl}`,
        title : rec.title,
      }
    });
    console.log(`results saved: ${state.search.results}`);
  }
catch (error){
  console.error(`${error} 💥💥💥💥`);
  throw err;
}}















// export const loadSearchResultsAsync = async function(query = 'pasta'){
//   try{
//     const res1 = await axios({
//       method: "GET",
//       url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
//       params: {
//         query: query,
//         number: 10,
//         offset: 0,
//       },
//       headers: {
//         "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//         "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
//       },
//     });
//     if(res1.status == 200) console.log(res1.status);
//     console.log(res1.data);
    // const res = await axios(res1)
    // const data = res.json()
    // console.log(data.then(data=> console.log(data)));
    // console.log(data);

    // axios.request(res1).then(function (response) {
    //   state.search.results = response.data.results.map(rec=>{
    //     return {
    //       id : rec.id,
    //       image : `https://spoonacular.com/recipeImages/${rec.image}`,
    //       cookingTime : rec.readyInMinutes,
    //       servings : rec.servings,
    //       sourceUrl : `https://spoonacular.com/${rec.sourceUrl}`,
    //       title : rec.title,
    //     }
    //   })
 
    //   console.log(state.search.results);
    // })
//   }
// catch (error){
//   console.error(`${error} 💥💥💥💥`);
//   // throw err;
// }}

// loadSearchResultsAsync();

// export const loadSearchResultsOLD = async function(query){
//   try{
//     const res1 = {
//       method: "GET",
//       url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
//       params: {
//         query: query,
//         number: 10,
//         offset: 0,
//       },
//       headers: {
//         "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//         "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
//       },
//     };
//     axios.request(res1).then(function (response) {
//       state.search.results = response.data.results.map(rec=>{
//         return {
//           id : rec.id,
//           image : `https://spoonacular.com/recipeImages/${rec.image}`,
//           cookingTime : rec.readyInMinutes,
//           servings : rec.servings,
//           sourceUrl : `https://spoonacular.com/${rec.sourceUrl}`,
//           title : rec.title,
//         }
//       })
 
//       console.log(state.search.results);
//     })
//   }
// catch (error){
//   console.error(`${error} 💥💥💥💥`);
//   throw err;
// }}






































