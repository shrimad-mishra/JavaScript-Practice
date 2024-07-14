/*
    Scoping in JavaScript determines the accessibility of variables, functions, and objects in various parts of your code during runtime. 
    There are three main types of scope in JavaScript:
*/

/* 
Global Scope:
    Variables declared outside any function or block have global scope.
    They can be accessed from anywhere in the code.
*/

let global_scope_var = 10;

function accessing_function() {
    console.log(`Accessed var through global scope -------------> ${global_scope_var}`);
}

accessing_function();

/*
Function Scope:
    Variable are declared inside the function and can be accessed in that function only.
*/

function acccess_function_scope() {
    let function_scope_var = 10;
    console.log(`Accessed var through function scope -------------> ${function_scope_var}`);
}

acccess_function_scope()

// This will throw the error as not defined
// console.log(`Accessing var outside function scope -------------> ${function_scope_var}`);

/*
Block Scope:
    Variable are declared inside any block and can be accessed in that block only.  
*/

if(1) {
    let block_scope_var = 10;
    console.log(`Accessed var through block scope -------------> ${block_scope_var}`);    
}

// This will throw the error as not defined
// console.log(`Accessed var through block scope -------------> ${block_scope_var}`);    

/*
Scope Chain: 
    When trying to access a variable, JavaScript starts from the innermost scope and looks outward until it finds the variable or reaches the global scope.
*/

var global_var = "I am global";

function outer_function() {
    var outer_var = "I am outer";

    function inner_function() {
        var inner_var = "I am inner";
        console.log(global_var); // Accessible (global scope)
        console.log(outer_var);  // Accessible (outer function scope)
        console.log(inner_var);  // Accessible (inner function scope)
    }

    inner_function();
}

outer_function();

/*
Lexical Scoping: 
    The scope is determined by the location of the variable declaration within the source code, and nested functions have access to variables declared in their outer scope.
*/

function outer() {
    var outer_var = "I am outer lexical";

    function inner() {
        console.log(outer_var); // Accessible due to lexical scoping
    }

    inner();
}

outer();
