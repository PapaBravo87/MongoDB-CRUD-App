// require('mongoose');
// let mongoose;
// try {
//   mongoose = require("mongoose");
// } catch (e) {
//   console.log(e);
// }
import mongoose from 'mongoose';
const { Schema } = mongoose;
require('dotenv').config();
// const cool = require('cool-ascii-faces');
// const express = require()

const personSchema = new Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  // create a document instance of Person
  let person = new Person({
    name: "Papa",
    age: 25,
    favoriteFoods: ["Chicken","Noodles"]
  });
  
  person.save(function(err,data) {
    if (err){
      return handleError(err);
    }
    // done
    // console.log('Doc Save Success');
    done(null , data);
  });

};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err){
    if(err){
      console.log(err);
      return handleError(err);
    }
    done(null, arrayOfPeople);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find( {name: personName} , function(err,personFound) {
    if(err) {
      console.log(err);
      return handleError(err);
    }
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  // done(null /*, data*/);
  Person.findOne( {favoriteFoods: food} , function(err,data) {
    if(err) {
      console.log(err);
      return handleError(err);
    }
    done(null, data);
  });
};

const findPersonById = (personId, done) => {
  // done(null /*, data*/);
  Person.findById( personId , function(err,personFound) {
    if(err) {
      console.log(err);
      return handleError(err);
    }
    done(null, personFound);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  console.log(foodToAdd);
   // .findById() method to find a person by _id with the parameter personId as search key. 
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
  
    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);

    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })
  }

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
