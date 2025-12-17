/*

 to create a new property
  give it a key using
  -> dot notation
  -> bracket notation
  then assing it a value

 to update an object property 
 1.Access it 
   -bracket notation
   -dot notation
2.After aceesing it
 = new value
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
 -> Add service cost using bractet 
 notation
*/

//Was added later
myfavCar["serviceCost"] = 10000;

//
myfavCar.color = "green";
//Self refence
//  myfavCar.myfavCar = myfavCar;

/*
 1.Create new object properties
 using both bracket and dotnotaiton

example->
  color,
  service_cost
2.create a property that self
refrences the object itself
 eg if my object is called myFavCar
 myFavCar.myFavCar=myFavCar
 -> self refencing
 console.log your original object
 for the property myFavCar
 should be endless-> infinity
*/

/*
 update exisint properties
 1.Acess eith through 
   -Bracket 
   -Dot notation
 2.After accesing 
  assing the new valued
*/

myfavCar.manafacture = "Suzuki";

console.table(myfavCar);

/*
 using dot or bracket notation
 update existing properties.
 Atleast 3->observation
*/
