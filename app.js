// ! Exercise 1:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):
//your code here 
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map(num => num * 2);

console.log(numsTimesTwo); 
// Prints: [26, 174, 4, 178, 24, 8, 180, 126]

// ! Exercise 2:
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstIngredient, secondIngredient] = pizzaToppings;
// Your code here:
console.log(firstIngredient);
// Prints: 'Pineapple'
console.log(secondIngredient);
// Prints: 'Olives'
console.log(pizzaToppings[0]);
// Prints: 'Pineapple'
console.log(pizzaToppings[1]);
// Prints: 'Olives'

// ! Exercise 3:
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.
//
// Starting code (don't modify this):

const car = {
    make: 'Audi',
    model: 'Q5',
  };
  
  // Your code here:

    const { make, model } = car;
    console.log(make);
    // Prints: 'Audi'
    console.log(model);
    // Prints: 'Q5'

// ! Exercise 4: 
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// 
// b. Console log the `uncontroversialPizzaToppings` variable.
//
// Starting code (don't modify this):

const morePizzaToppings = ['Cheese', 'Sauce'];
const uncontroversialPizzaToppings = [...morePizzaToppings];
// Your code here:
console.log(uncontroversialPizzaToppings);


// ! Exercise 5:
// a. Duplicate the provided `anotherCar` object and spread its values into a 
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const anotherCar = {
    make: 'Toyota',
    model: 'RAV4',
  };
  const myCar = { ...anotherCar };
  
  myCar.make = 'Honda';
    myCar.model = 'Civic';

    console.log("original: ", anotherCar);
    console.log("clone: ", myCar);





  const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  
  // ! Exercise 6:
// a. Define a variable named `propertyName` and assign a string (like 
//    'username', 'age', or 'email') to it.
// 
// b. Create an object named `userProfile`. 
// 
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a 
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.
//
// Your code here:
const propertyName = "username";
const userProfile = {
  [propertyName]: 'user1313',
};
console.log(userProfile);

// question 7 was working through import/export syntax. and package.json

// ! Exercise 8:
// a. Create a function with two parameters, `noun` and `adjective`.
// 
// b. Give `noun` a default value of "cat" and `adjective` a default value of 
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but 
//    should substitute the appropriate parameters when it is supplied with 
//    arguments.
//
// Your code here:
function describe(noun = "cat", adjective = "orange") {
    console.log(`The ${noun} is ${adjective}.`);
}


// ! Exercise 9:
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//
// Starting code (don't modify this):

const pizza = 'tasty';

// Your code here:
pizza === 'tasty' ? console.log('yum') : console.log('yuck');





  


  
  
  
  










