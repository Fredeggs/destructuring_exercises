// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // Prints 8 
// console.log(yearNeptuneDiscovered); // Prints 1846



 let planetFacts = {
     numPlanets: 8,
     yearNeptuneDiscovered: 1846,
     yearMarsDiscovered: 1659
   };
  
   let {numPlanets, ...discoveryYears} = planetFacts;
  
   console.log(discoveryYears); // Prints {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}



function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // Prints "Your name is Alejandro and you like purple"
  getUserData({firstName: "Melissa"}) // Prints "Your name is Melissa and you like green"
  getUserData({}) // Prints "Your name is undefined and you like green"




  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]


let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]


// ES2015 Refactoring //
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
 let {numbers:{a,b}} = obj;

var arr = [1, 2];
[arr[1], arr[0]] = [arr[0], arr[1]];


const raceResults = ([first, second, third, ...rest]) => {
    return {
        first,
        second,
        third,
        rest
    }
} 
raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/