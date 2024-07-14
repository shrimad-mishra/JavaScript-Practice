/*
    They are the function which takes another function as the argumnet and also they can return a function as output.
*/

let sum = (a, b) => {
    return a + b;
}

let mul = (a, sum_funs) => {
    return (b, c) => {
        return a * sum_funs(b, c);
    }
}

console.log(mul(9, sum)(9, 8))