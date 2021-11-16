import axios from "axios";

// Search Site Content
var options = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/site/search",
  params: { query: "past" },
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

//   Get recipe information
var options1 = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1118357/information",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
  },
};

axios
  .request(options1)
  .then(function (response) {
    console.log(response.data);

    // returns
    // data.analyzedInstructions[0].steps[map(step=>step.step)]
    // data.cheap => true or false
    // data.cuisines[Korea, Asian]
    // data.dishTypes[lunch,main course, main dish, dinner]
    // data.extendedIngredients includes array with id, image, name, amount
    // data.id
    // data.image
    // data.instrunctions - common instruction in one str
    // data.licence "CC BY 3.0"
    // data.readyInMinutes - 45
    // data.servings - 4
    // data.sourceName - "Foodista"
    // data.sourceUrl
    // data.spoonacularScore
    // data.spoonacularUrl
    // data.summary - text for the dish
    // data.title - name of the dish
    // data.vegan, data.vegeratian, data.veryHealty, data.veryPopular, data.flutenFree - true or false
  })
  .catch(function (error) {
    console.error(error);
  });

// Extract the recipe
var options4 = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract",
  params: { url: "http://www.melskitchencafe.com/the-best-fudgy-brownies/" },
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
  },
};

axios
  .request(options4)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

// Search for recipe
var options3 = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
  params: {
    query: "burger",
    diet: "vegetarian",
    excludeIngredients: "coconut",
    intolerances: "egg, gluten",
    number: "10",
    offset: "0",
    type: "main course",
  },
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
  },
};

axios
  .request(options3)
  .then(function (response) {
    console.log(response.data);

    // returns
    // data.results[id,image,readyInMinutes,servings,sourceUrl,title]
  })
  .catch(function (error) {
    console.error(error);
  });

// Get similar recipe

var options2 = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/156992/similar",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
  },
};

axios
  .request(options2)
  .then(function (response) {
    console.log(response.data);

    // returns
    // data.id
    // data.readyInMinutes - 45
    // data.servings
    // data.sourceUrl
    // data.title
  })
  .catch(function (error) {
    console.error(error);
  });

// var options2 = {
//   method: "GET",
//   url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random",
//   headers: {
//     "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//     "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
//   },
// };

// axios
//   .request(options2)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
