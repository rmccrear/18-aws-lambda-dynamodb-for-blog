const dynamoose = require('dynamoose');

const animalSchema = new dynamoose.Schema({
  id: String,
  name: String,
  species: String
});

// Tell Dynamoose not to attempt to create a table in DynamoDb.
const configObj = { "create": false, "waitForActive": false }

const AnimalModel = dynamoose.model("cityZoo",
  animalSchema,
  configObj
);

module.exports = AnimalModel;
