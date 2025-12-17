/*

Object is a datatype 
that holds other datatypes.

--> Fav Car: fav car
*/

let manafacture = "Toyota";
let carType = "Suv";
let model = "Rav4";
let seats = 5;
let hasSunRoof = false;

/*Key Value Pair*/
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

//
console.table(myfavCar);

/*
 1.An oject
 has a key and value pair
 2.The key can be a string,
   number,boolean
   -if the key is a string
   and it has spaces or 
   starts with number
   then you have to use
   "" ->string quotes
 3.Value can be anyother
 datatype
 -> object
 ->null
 ->string
 ->function:<Method>
 ->number
 ->boolean
 ->undefined
*/
/*
 1.ensure your favcar
 has a key value pair of 
 -.object
 -.string
 -boolean
 -null
 -number
 -function
 2.create a key of
   -string with spaces
   -string that starts a number
   -bolean
   -number
3.console.log your object
4.console.table your object
5.typeof your object
*/
