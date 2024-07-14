/*
An Immediately Invoked Function Expression (IIFE) is a design pattern that helps encapsulate code and avoid polluting the global scope. 

Why use IIFE?
    Encapsulation: By encapsulating code inside an IIFE, you create a private scope. Variables defined inside the IIFE are not accessible from the outside, 
                preventing unintended interactions with other code.
    Avoiding Global Scope Pollution: In JavaScript, variables declared outside of any function are placed in the global scope. 
                Too many global variables can lead to conflicts and bugs. IIFEs help by containing variables within a local scope.
*/

(function() {
    var counter = 0;
  
    function increment() {
      counter++;
    }
  
    increment();
    console.log(counter);
})();