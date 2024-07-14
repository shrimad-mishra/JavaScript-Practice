/*
'this' keyword is a powerful and versatile feature that refers to the context in which a function is executed. T
The value of this depends on how a function is called, and it can change depending on the function's invocation context. 

By default it is refered to the global context i.e window
In the function it refres to the global context.
In method it refers to the parent.
In strict mode, this will be undefined.
Arrow function do not have their pwn this, they inherit this from lexical context.
*/

// Global Context This

console.log(this)   // In a browser, this will log the Window object

// Function Context This

function function_context() {
    console.log(this)
}

function_context()

// Method Context This

let method_context = {
    "name": "Shrimad",
    "age": 24,
    info: function () {
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
}

method_context.info()