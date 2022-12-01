const AnimalModel = require("./animal.js");
const uniqid = require("uniqid");

const handler = async (event) => {
  const animal = new AnimalModel({
    id: uniqid(),
    name: event.name,
    species: event.species
  })

  const resp = await animal.save();
  console.log(resp)
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from " + resp.name + " the " + resp.species),
  };
  return response;
};

module.exports = { handler };
