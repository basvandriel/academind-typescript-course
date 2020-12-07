// const person: {
//   name: string;
//   age: number;
// }
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Bas",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivitites: string[];
favoriteActivitites = ["Sports"];

let anyArray: any[];
anyArray = ["Sports", 1, true];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
