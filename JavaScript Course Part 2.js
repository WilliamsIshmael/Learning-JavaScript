// STRICT MODE

`The purpose of "use strict" is to indicate that the code should be executed in "strict mode".`
`Strict mode is declared by adding "use strict"; to the beginning of a script or a function.`

// FUNCTIONS 
`A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Start with the 'function' keyword then follow with the name of the function.`

function speaker() {
  console.log('Hello, I am the speaker')
}

speaker(); 
speaker(); 
speaker(); 

// Parameters in functions
`Parameters are variables that you list as part of a function definition. 
They act as placeholders for values that will be passed to the function when it is called.`

function addNumbers(a, b) { 
return a + b; 
} 

`a and b are parameters.`

console.log(addNumbers(10, 23)); 

`10 will take the place of a and 23 will take the place of b.`

// ARRAYS 
`It stores multiple values and elements in one variable.`

const friends = ['Alessandro', 'Viktor', 'Isabella', 'Mike', 'Enzo']; 

// OBJECTS 
`An object literal is a list of property names:values inside curly braces {}.`

let car = {brand: "Audi", model: "RS Q8", year: "2024", color: "Nardo Gray"}; 

`It is also possible to create an empty object then add properties.` 

let car = {}; 
car.brand = "Audi";
car.model = "RS Q8"; 
car.year = "2024"; 
car.color = "Nardo Gray"; 


  // DOT AND BRACKET NOTATION

const contestant = {
  firstName: 'Hunter', 
  lastName: 'Carson', 
  age: 22, 
  division: 'intermediate'
}; 

contestant.homeGym = 'Peak360'; 
contestant['location'] = "Miami, Florida"; 

console.log(`${contestant.firstName} ${contestant.lastName} is a ${contestant.age} year old CrossFit athelete. He is from ${contestant.location} and is a member at ${contestant.homeGym}.`);

const mark = { 
  fullName: 'Mark Miller', 
  mass: 78, 
  height: 1.69,

 calcBMI: function() {
    return this.mass / Math.pow(this.height, 2);
  }
}; 

const john = { 
  fullName: 'John Smith', 
  mass: 92, 
  height: 1.95,

   calcBMI: function() {
    return this.mass / Math.pow(this.height, 2);
  }
}; 

console.log(mark.calcBMI());
console.log(john.calcBMI());




