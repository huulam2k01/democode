// const countries = [
//   { name: "Nigeria", continent: "Africa" },
//   { name: "Nepal", continent: "Asia" },
//   { name: "Angola", continent: "Africa" },
//   { name: "Greece", continent: "Europe" },
//   { name: "Kenya", continent: "Africa" },
//   { name: "Greece", continent: "Europe" },
// ];
// let a = { name: "Nigeria", continent: "Africa" };
// let b = countries.filter((country) => {
//   return country.name === a.name && country.continent === a.continent;
// });
// console.log(b);
// function check() {
//   var a = 1,
//     b = 2;
//   if (a == b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(check());

let key = "user";

// Create entry:
let myObj = { name: "Nam", age: 20 };
localStorage.setItem(key, JSON.stringify(myObj));

// Read entry:
let item = JSON.parse(localStorage.getItem(key));
