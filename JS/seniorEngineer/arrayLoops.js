let learnStuff = [
  4,
  "Kids Next Door",
  true,
  null,
  {
    manufacture: "Toyota",
    model: "Hilux",
  },
  [2, 3, 7],
  function goodMorning() {
    alert("Good morning");
  },
];

/*
 create a function
  that utilizes a loop
  --> for ,while loop
   that counts from 0 to 10
   prints the number 0 upto 10
*/

/*
 For your array 
 using loops
 console.log everhing inside there
*/

function from0to10() {
  let k = 0;
  while (k < learnStuff.length) {
    console.log("K is", k);
    console.log(learnStuff[k]);
    k = k + 1;
  }
  //   for (let i = 0; i < 11; i = i + 1) {
  //     console.log("I is ", i);
  //   }
}

//from0to10();
