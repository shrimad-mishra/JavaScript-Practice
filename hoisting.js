/*
    It is the action in which all the varibales and function declartions moved to the top at the runtime.
    All the var variables are initialised with undefined values but let and const are not initialised.
*/

console.log(`X is ${x} due to hoisting`);
x = 10;
var x;

test()
function test() {
    console.log(`X is ${x}`);
}