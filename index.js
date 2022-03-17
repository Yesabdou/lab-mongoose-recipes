const mongoose = require('mongoose');

const Recipe = require('./models/Recipe.model');

//import {Recipe} from './models/Recipe.model'

const data = require('./data');
console.log(data)
const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {

    const newReceip = {
      title: "oeuf dur",
      level: "Amateur Chef",
      ingredients: [        "un oeuf", "1l eau"
      ],
      cuisine: "lahess",
      dishType: "main_course",
      image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 40,
      creator: "Chef "
    }
    Recipe.create(newReceip)
    // Run your code here, after you have insured that the connection was made
  })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });
