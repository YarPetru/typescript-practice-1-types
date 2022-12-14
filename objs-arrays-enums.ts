// const person: {
//   name: string;
//   age: number;
// } = {
// const person = {
//   name: "yrslv",
//   age: 31,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const AUTHOR = 1;
// const READ_ONLY = 2;
// === enum Role

enum Role {
  ADMIN = 66,
  AUTHOR,
  READ_ONLY,
}

const person = {
  name: "yrslv",
  age: 31,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());  // ERROR (because TS knows that hobby must be a string type)
}

if (person.role === Role.ADMIN) {
  console.log("YOU CAN DO EVERYTHING YOU WANT");
} else {
  console.log("YOU ARE NOT AN ADMIN, SORRY");
}
