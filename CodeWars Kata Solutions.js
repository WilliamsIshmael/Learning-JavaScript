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





