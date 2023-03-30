// Create an array with three elements and print the second element to the console.
let dogs = ["Dachshund", "Greyhound", "Collie"];
console.log(dogs[1]);

// Create an object with two properties and print the value of one of the properties to the console.
let fruit = { name: "apple", colour: "red/green/yellow", taste: "sweet/sour" };

console.log(Object.values(fruit.colour).join(""));
// Create an array with five elements and use a loop to print each element to the console.
let cats = [
  "Sphynx",
  "Persian",
  "Oriental Shorthair",
  "Cornish Rex",
  "Maine Coon",
];
cats.forEach((element) => {
  console.log(element);
});

// Create an object with three properties and use a loop to print each property and its value to the console.
let food = {
  name: "Pasta",
  time: "Dinner",
  ingredients: ["Spagetti", "Parmasean", "Pesto"],
};
console.log(Object.entries(food));

// Create an array with three elements and add a new element to the beginning of the array.
let citrus = ["Lemon", "Lime", "Orange"];
let citron = citrus.unshift("Citron");
console.log(citrus);

// Create an object with two properties and add a new property to the object.
let person = {
  name: "Jack Sparrow",
  job: "Pirate",
};
person.vehicle = "Ship";
console.log(person);

// Create an array with four elements and remove the third element.
let colours = ["Lavender", "Chartreuse", "Indigo", "Blush"];
let threeColours = colours.splice(2, 1);
console.log(colours);

// Create an object with three properties and delete one of the properties.
let plant = { name: "Rose", flowering: "Yes", protection: "Thorns" };
delete plant.flowering;
console.log(plant);

// Create an array with six elements and use the slice method to create a new array with the second and third elements.
let ingredients = ["Gin", "Vodka", "Kahlua", "Tequila", "Cointreu", "Brandy"];
let espressoMartini = ingredients.slice(1, 3);
console.log(espressoMartini);

// Create an object with four properties and use the Object.keys method to create an array with the property names.
let yesNo = {
  yes: "no",
  no: "yes",
  maybe: "yes/no",
  ok: "maybe yes",
};
console.log(Object.keys(yesNo));
