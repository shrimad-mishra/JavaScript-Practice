/*
In JavaScript, promises are a way to handle asynchronous operations. They represent a value that may be available now, in the future, or never. 

Promises can be in one of three states:
    Pending: Initial state, neither fulfilled nor rejected.
    Fulfilled: The operation completed successfully, and the promise now has a value.
    Rejected: The operation failed, and the promise has a reason (usually an error) why it was rejected.
*/

function promise_tutorial() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("This is resolved");
            resolve("Data fetched successfully!"); // Resolve with a message
        }, 2000);
    });
}

promise_tutorial().then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});

/*
Promise.all(iterable):

Promise.all() is used when you have multiple asynchronous tasks that can run concurrently and you want to wait until all of them are completed.
It takes an iterable (e.g., an array) of promises as input and returns a single promise.
The returned promise is fulfilled when all input promises have been fulfilled, or it is rejected as soon as one of the input promises is rejected.
The fulfillment value is an array of the values from the input promises, in the same order as the promises in the iterable.
*/

let promise_1 = Promise.resolve(1);
let promise_2 = Promise.resolve(2);
let promise_3 = Promise.resolve(3);

Promise.all([promise_1, promise_2, promise_3])
.then((values) => {
    console.log(values); 
})
.catch((error) => {
    console.error(error);
});

/*
Promise.race(iterable):

Promise.race() is similar to Promise.all(), but it waits only for the first promise to settle (either fulfill or reject).
It takes an iterable (e.g., an array) of promises as input and returns a single promise.
The returned promise settles with the same outcome (fulfilled or rejected) as the first promise in the iterable to settle.
*/

let promise__1 = new Promise((resolve) => setTimeout(resolve, 1000, 'first'));
let promise__2 = new Promise((resolve) => setTimeout(resolve, 500, 'second'));

Promise.race([promise__1, promise__2])
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.error(error);
});

/*
Promise.allSettled(iterable)
    Promise.allSettled() takes an iterable (e.g., an array) of promises as input and returns a single promise.
    The returned promise is fulfilled with an array of objects when all input promises have settled (either fulfilled or rejected).
    Each object in the array represents the outcome of each promise in the iterable:
    If the promise is fulfilled, the object will have a status property set to "fulfilled" and a value property with the fulfilled value.
    If the promise is rejected, the object will have a status property set to "rejected" and a reason property with the rejection reason.
*/

let promise1 = Promise.resolve(1);
let promise2 = Promise.reject(new Error('Reason for rejection'));
let promise3 = new Promise(resolve => setTimeout(resolve, 1000, 'resolved'));

Promise.allSettled([promise1, promise2, promise3])
.then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Fulfilled:', result.value);
        } else if (result.status === 'rejected') {
            console.error('Rejected:', result.reason.message);
        }
    });
})
.catch(error => {
    console.error('Error:', error);
});
