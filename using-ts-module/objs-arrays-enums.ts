// const person: {
//   name: string;
//   age: number;
// }

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Bas",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivitites: string[];
favoriteActivitites = ["Sports"];

let anyArray: any[];
anyArray = ["Sports", 1, true];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("READ ONLY USER");
}
