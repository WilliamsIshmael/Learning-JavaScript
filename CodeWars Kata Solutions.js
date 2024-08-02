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

// Convert Age to Days 
`
Create a function that takes the age in years and returns the age in days.
` 
function calcAge(age) {
	return age * 365;
}

// Grasshopper - Messi goals function
`
Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.
`
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return (laLigaGoals + copaDelReyGoals + championsLeagueGoals);
}

// Beginner Series #2 Clock
`
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
`

function past(h, m, s){
  return (h * 60 * 60000) + (m * 60000) + (s * 1000);
}

// Hello World
`
Make a simple function called greet that returns the most-famous "hello world!".
`

// Convert boolean values to strings 'Yes' or 'No'
` 
Complete the method that takes a boolean value and return a "Yes" string for true, 
or a "No" string for false.
`
function boolToWord( bool ){
  if (bool) return "Yes"
  else return "No"; 
  }
function greet() {
  return 'hello world!'; 
  }

// Convert a Boolean to a String
` 
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
`
function booleanToString(b) {
  if (b === true) return "true"
else return "false" }

// Name Shuffler
` 
Write a function that returns a string in which firstname is swapped with last name.
"john McClane" --> "McClane john"
`
function nameShuffler(str){
  const newName = str.split(' ');
  return newName[1] + ' ' + newName[0];
}

// Remove String Spaces
`
Write a function that removes the spaces from the string, then return the resultant string.
`
function noSpace(x){
return x = x.replace(/\s+/g, '');
}

// Super Duper Easy 
`
Make a function that returns the value multiplied by 50 and increased by 6. 
If the value entered is a string it should return "Error".
`
function problem(x){
  if (typeof x === "number") {
    return (x * 50 + 6);
  } else {
    return "Error";
}
}
