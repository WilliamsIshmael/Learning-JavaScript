JAVASCRIPT

// Is it even?
`
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.
`

function testEven(n) {
    return n % 2 === 0;
}

// Opposite number 
`
Very simple, given a number (integer / decimal / both depending on the language), 
find its opposite (additive inverse).

Examples: 
1: -1
14: -14
-34: 34
`
function opposite(number) {
  return (-number)
}

// Volume of a Cuboid 
`
Bob needs a fast way to calculate the volume of a cuboid with three values: 
the length, width and height of the cuboid. Write a function to help Bob with this calculation.
`
class Kata {
  static getVolumeOfCuboid(length, width, height) {
   return (length * width * height)
  }
}

// Third Angle of a Triangle 
`
You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.
`
function otherAngle(a, b) {
  return (180 - a - b);
}

// Simple multiplication 
`
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
`
function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8
      } else { 
      return number * 9;
      }
}

// Grasshopper - Basic Function Fixer 
`
I created this function to add five to any number that was passed in to it and return the new value. 
It doesn't throw any errors but it returns the wrong number.
Can you help me fix the function?
`
function addFive(num) {
  var total = num + 5
  return total;
}

// Grasshopper - Terminal game combat function 
`
Create a combat function that takes the player's current health and the amount of damage recieved, 
and returns the player's new health. Health can't be less than 0.
`
function combat(health, damage) {
  if (health - damage > 0) {
    return (health - damage) 
  } else {
    return 0;
  }  
}

// Returning Strings
`
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]
`
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// MakeUpperCase 
`
Write a function which converts the input string to uppercase.
`
function makeUpperCase(str) {
  return str.toUpperCase();
}

// Convert a Number to a String!
`
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
`
function numberToString(num) {
  return num.toString();
}

