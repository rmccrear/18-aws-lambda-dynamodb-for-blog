import AnimalModel from "./animal.mjs";
// import { nanoid } from "nanoid";

export const handler = async (event) => {
  const animal = new AnimalModel({
    id: "croc-1",
    name: "Larry",
    species: "crocodile"
  })

  const resp = await animal.save();
  console.log(resp)
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from " + resp.name + " the " + resp.species),
  };
  return response;
};
