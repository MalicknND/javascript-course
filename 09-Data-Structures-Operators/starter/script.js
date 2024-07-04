'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// ******************************************************************************
// Logical Assignment Operators
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Malick',
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1.numGuests); // 20
console.log(rest2.numGuests); // 10

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Assignment Operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= 'Malick';
rest2.owner &&= 'Malick';

console.log(rest1); //
console.log(rest2); // 10

*/

// ******************************************************************************
// The Nullish Coalescing Operator (??)
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;

console.log(guestCorrect); // 0
*/
// ******************************************************************************
// Short Circuiting (&& and ||)
// Use any data type, return any data type, short-circuiting
/*
console.log('---- OR ----'); // Returns the first truthy value or the last value if all are falsy

console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // 10
console.log(guests1);

const guests2 = restaurant.numGuests || 10; // 23
console.log(guests2);

console.log('---- AND ----'); // Returns the first falsy value or the last value if all are truthy
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
// this is the same as the above if statement but shorter and cleaner code
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// ******************************************************************************
// Rest Pattern and Parameters
/*
// 1) Destructuring
// spread, because on right side of =
const arr = [1, 2, ...[3, 4]];

// rest, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(num => (sum += num));

  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
add(...x); // 35

// call the function with the spread operator
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms, ['onion', 'olives', 'spinach']
restaurant.orderPizza('mushrooms'); // mushrooms, []

*/

// ******************************************************************************
// Spread Operator
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]

console.log(...newArr); // 1 2 7 8 9

// Copy Array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Merge Arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu); // ['Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Iterables: arrays, strings, maps, sets. NOT objects, multiple arguments separated by commas
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']
console.log(...str); // J o n a s

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];

console.log(ingredients); // ['garlic', 'onion', 'spinach']
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Malick' };
console.log(newRestaurant);

// Copy Object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano
*/
// ******************************************************************************
// Destructuring Objects
/*
//
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming the variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default Values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // 23 7

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); // 11 23
*/

// ******************************************************************************
/*
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring Arrays
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, , second] = restaurant.categories;
console.log(first, second); // Italian Vegetarian

// Switching Variables
let [main, , secondary] = restaurant.categories;
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // Vegetarian Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); // Italian Vegetarian

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5, 6]

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default Values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); // 8 1 1


*/
// ******************************************************************************
