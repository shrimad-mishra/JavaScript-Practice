/*
async and await are used to work with asynchronous code more easily and readably. 
They are built on top of Promises, providing a way to write asynchronous code that looks synchronous, making it easier to understand and maintain.

Async Functions
An async function is a function declared with the async keyword. 
Inside an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved. 
The async keyword ensures that the function returns a Promise, and if the function returns a value, that value is wrapped in a resolved Promise.
*/

async function async_function(a) {
    setTimeout(() => {console.log("Inside async function.")}, a*1000);
}


async_function(2).then((value)=> {
        console.log("Resolved") 
    }
).catch((error) => {
        console.log("Rejected")
    }
);

async function test() {
    let res = await async_function(9);
    console.log(`Inside test ${res}`);
}

test();

// async function async_function(a) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Inside async function.");
//             resolve("Done");
//         }, a * 1000);
//     });
// }

// async function test() {
//     let res = await async_function(2);
//     console.log(`Inside test ${res}`);
// }

// test();