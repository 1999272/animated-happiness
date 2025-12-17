/*
 When need to read
 or access object property
 1.Bracket Notation
 2.Dot notation
*/

let myfavCar = {
  manafacture: "Toyota",
  carType: "Suv",
  model: "Rav4",
  seats: 5,
  hasSunRoof: true,
  costOfCar: 2000000,
  dealer: {
    name: "toyota kenya",
    location: "CBD",
  },
  hybridDrive: null,
  taxes: function () {
    let tax = 2000000 * 0.16;
    return tax;
  },
  "capacity in cc": 2500,
  "1inrallycross": false,
  true: "its very fast",
  0: "best in class",
};

/*
  KEY:VALUE
*/
/*
 for bracket notation use []
 -inside the square brackets
 have the key as a string

 1.for each property you have in your
 object console.log it and its type
*/

console.log("manufacture ", myfavCar["manafacture"]);
console.log(" type", typeof myfavCar["manafacture"]);

//Nested Read of propety
let dealerName = myfavCar["dealer"]["name"];

console.log(myfavCar["taxes"]());

/*
-->use bracket notation
 1.For each individual property
  -console.log it
  -print its type
 2.For each nested property
  -console.log it
  -print its type
 3.For the function
   - console.log the function itself
   - print its type
   -call the function
*/

/*
The other way to access object
properies is using
dot notaion
-> only works for
 string that dont start
 with a number
 and dont have spaces
*/

// console.log("manufacture ", myfavCar.manafacture);

// console.log("", myfavCar.dealer["name"]);

//console.log

/*
-->use dot  notation
 where applicable
 1.For each individual property
  -console.log it
  -print its type
 2.For each nested property
  -console.log it
  -print its type
 3.For the function
   - console.log the function itself
   - print its type
   -call the function
*/
