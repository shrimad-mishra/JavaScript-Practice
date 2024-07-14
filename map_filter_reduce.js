/*
Map, Filter, and Reduce are higher-order functions that are commonly used for manipulating arrays. 
They are part of the Array prototype and are used to transform, filter, and reduce arrays, respectively.
*/

/*
Map
    The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
console.log(doubled);

// Same without map
function modify_array(array) {
    for(let i = 0; i < array.length; i++)
        array[i] = array[i] * 2;
    
    return array;
}

console.log(modify_array([1, 2, 3, 4, 5]))

/*
Filter
    The filter method creates a new array with all elements that pass the test implemented by the provided function.
*/

let number_1 = [1,2,3,4,5]
const even_numbers = number_1.filter(val => val%2=== 0)
console.log(even_numbers)

/*
Reduce
    The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
*/

let number_2 = [1,2,3,4,5]
let sum_numbers = number_2.reduce((a, b) => { return a+b })
console.log(sum_numbers)

/*

1. `map`

**Syntax:**
const newArray = array.map((currentValue, index, array) => {
  // return element for newArray
});

- **`array`**: The original array that `map` was called upon.
- **`currentValue`**: The current element being processed in the array.
- **`index`** (optional): The index of the current element being processed.
- **`array`** (optional): The array `map` was called upon.

**Explanation:**
- `map` iterates over each element in the `array`, applying the provided function to each element.
- It creates a new array populated with the results of calling the provided function on every element in the calling array.
- The provided function can take up to three arguments: `currentValue` (required), `index` (optional), and `array` (optional).
- It returns a new array with each element being the result of the callback function.


2. `filter`

**Syntax:**
const newArray = array.filter((currentValue, index, array) => {
  // return true if element should be included in newArray
});

- **`array`**: The original array that `filter` was called upon.
- **`currentValue`**: The current element being processed in the array.
- **`index`** (optional): The index of the current element being processed.
- **`array`** (optional): The array `filter` was called upon.

**Explanation:**
- `filter` creates a new array with all elements that pass the test implemented by the provided function.
- The provided function is called for each element in the array and should return `true` to include the element in the new array or `false` to exclude it.
- It returns a new array containing only the elements for which the callback function returned `true`.


3. `reduce`

**Syntax:**
const result = array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator
}, initialValue);

- **`array`**: The original array that `reduce` was called upon.
- **`accumulator`**: Accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback.
- **`currentValue`**: The current element being processed in the array.
- **`index`** (optional): The index of the current element being processed.
- **`array`** (optional): The array `reduce` was called upon.
- **`initialValue`**: A value to use as the first argument to the first call of the callback function. If no `initialValue` is supplied, the first element in the array will be used as the initial accumulator value and skipped as `currentValue`.

**Explanation:**
- `reduce` executes a reducer function on each element of the array, resulting in a single output value.
- The reducer function receives four arguments: `accumulator`, `currentValue`, `index`, and `array`.
- It returns the accumulated result from the previous invocation (or `initialValue` for the first invocation) and the current element's value.
- The accumulator carries the accumulated result and passes it to the next iteration.

*/