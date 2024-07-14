/*
    It is the action in which the child function is having access to all the arguments passed in the parent function and also have access to all the variables of the parent function, 
    even after the parent function has finished executing.
*/

function closure(a) {
    let b  = 9;

    return () => {
        console.log(`a is ${a} and b is ${b}`);
    }
}

closure(8)();