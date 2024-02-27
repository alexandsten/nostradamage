const functions = require("firebase-functions");

exports.myPetsEndpoint = functions.https.onRequest((request, response) => {
  const pets = [{name: "Fluffy", type: "Cat"}, {name: "Buddy", type: "Dog"}];
  response.json({pets});
});
