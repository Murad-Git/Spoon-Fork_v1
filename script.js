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

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

//   Get recipe information
var options1 = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/482788/information",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
  },
};

// axios
//   .request(options1)
//   .then(function (response) {
//     console.log(response.data);

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
    // data.vegan, data.vegeratian, data.veryHealty, data.veryPopular, data.glutenFree - true or false
  // })
  // .catch(function (error) {
  //   console.error(error);
  // });

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

// axios
//   .request(options4)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// Search for recipe. Adding in Category
var options3 = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search",
  params: {
    query: "main dish",
    number: "20",
  },
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
  },
};

// axios
//   .request(options3)
//   .then(function (response) {
//     console.log(response.data);

    // returns
    // data.results[id,image,readyInMinutes,servings,sourceUrl,title]
  // })
  // .catch(function (error) {
  //   console.error(error);
  // });

// Get similar recipe

var options2 = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/156992/similar",
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": "45577c3ba9msh94810407e5e0130p165a48jsnf26c9fe12809",
  },
};

// axios
//   .request(options2)
//   .then(function (response) {
//     console.log(response.data);

    // returns
    // data.id
    // data.readyInMinutes - 45
    // data.servings
    // data.sourceUrl
    // data.title
  // })
  // .catch(function (error) {
  //   console.error(error);
  // });

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



// const mainFunction = (input) => {
//   // Place your code here

//   const array1 = [0,1,2,3,4,5,6,7,8,9]
//   const array2 = Array.from(input)
//   console.log(array2)
//   // Loop for array1
//   for(let i = 0; i < array1.length; i++) {
       
//       // Loop for array2
//       for(let j = 0; j < array2.length; j++) {
           
//           // Compare the element of each and
//           // every element from both of the
//           // arrays
//           if(array1[i] === array2[j]) {
           
//               // Return if common element found
//               return true;
//           }
//       }
//   }
   
//   // Return if no common element exist
//   return false;

// }

// mainFunction('a0b1c2d3e4f5g6h7i8j9')