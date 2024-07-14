/*
Call and Apply are methods that allow you to call a function with a specified this value and arguments. 
Both methods are used to borrow functions from other objects and invoke them in the context of another object.
Basically bot the function change the context of 'this' in their use.
*/

//Call Method

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = {
    name: 'Shrimad'
};

// First param is the object tyo which you want this to be point
greet.call(person, 'Hello', '!');

greet.call(person, 'Wondeful', '.');
  
// If this is refecnced to null then the this will point to the global context.
greet.call(null, 'Wondeful', '.');

// Apply

function greet_1(greeting, punctuation, time) {
    console.log("For apply " + greeting + ', ' + this.name + punctuation + " " + time);
}

const person_1 = {
    name: 'Shrimad'
};

// First param is the object tyo which you want this to be point
greet_1.apply(person_1, ['Hello', '!', "11"]);

greet_1.apply(person_1, ['Hello', '!']);

// If this is refecnced to null then the this will point to the global context.
greet_1.apply(null, ['Wondeful', '.', "9"]);

/*
The call and apply methods in JavaScript are used to invoke functions with a specific this value and arguments. 
The primary difference between them is how they handle the arguments passed to the function.

Differences
    Arguments Handling:

call: Passes arguments to the function individually.
apply: Passes arguments as an array

Use Cases:

call: When you have a known, fixed number of arguments.
apply: When you have an array of arguments or when the number of arguments is unknown or varies.

These both method imidetialty invoked the function
*/

/*
The bind method creates a new function that, when called, has its this keyword set to the provided value. 
It also allows you to pass in a sequence of arguments which will be prepended to any arguments provided when the new function is called.
*/

function greet_2(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  
const person_2 = {
    name: 'Shrimad'
};

// Using bind
const greet_shrimad = greet_2.bind(person);
greet_shrimad('Hello', '!');
  
/*
Differences from call and apply
    Immediate Invocation:

    call and apply immediately invoke the function with the specified this value and arguments.
    bind returns a new function that can be invoked later.
Argument Handling:

    call and apply pass arguments individually or as an array, respectively.
    bind can pre-set some arguments for the new function, and additional arguments can be provided when the new function is invoked.

Summary
    Use bind when you need to create a new function with a specific this value that can be called later.
    Use bind for function borrowing, partial application, ensuring this in event handlers, and method chaining.
    Unlike call and apply, bind does not invoke the function immediately.
*/