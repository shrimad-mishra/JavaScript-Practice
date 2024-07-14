/*
It allows you to unpack values from arrays or properties from objects into distinct variables. This syntax makes it easier to extract and manipulate data.
*/

const array = [1, 2, 3, 4, 5];

const [first, second, third] = array;

console.log(first);
console.log(second);
console.log(third); 

const [first_1, , thrid_1] = array;

console.log(first_1); 
console.log(thrid_1);  

const [first_2, second_2, ...rest] = array;

console.log(first_2); 
console.log(second_2);
console.log(rest);

const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Developer'
  };
  
  const { name, age, occupation } = person;
  
  console.log(name);
  console.log(age);
  console.log(occupation);
  
const array_1 = [1];

const [first_3, second_3 = 2] = array;

console.log(first_3); 
console.log(second_3); 