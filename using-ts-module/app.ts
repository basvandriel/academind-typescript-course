// const person: {
//   name: string;
//   age: number;
// }
const person = { name: "Bas", age: 27, hobbies: ["Sports", "Cooking"] };

let favoriteActivitites: string[];
favoriteActivitites = ["Sports"];

let anyArray: any[];
anyArray = ["Sports", 1, true];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
