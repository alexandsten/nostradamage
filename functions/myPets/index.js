const {onRequest} = require("firebase-functions/v2/https");

exports.myPetsEndpoint = onRequest((request, response) => {
  const pets = [{name: "Fluffy", type: "Cat"}, {name: "Buddy", type: "Dog"}];
  response.json({pets});
});
