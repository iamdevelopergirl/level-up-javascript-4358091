// Write your code here
const username = Symbol("user");
const password = Symbol("password");

const user = {
  [username]: "Elakya",
  [password]: "password",
  id: "id1"
}

console.log(user.username);
console.log(user[username]);
console.log(user.password);
console.log(user[password]);
console.log(user.id);