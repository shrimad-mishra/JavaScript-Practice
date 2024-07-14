/*
	This is concept of passing the small number of arguments instead of passing all the arguments at once.
*/

// Non currying example

function mul(a, b, c) {
	return a*b*c;
}

console.log(mul(9,0,0));

// Using function closure
function mul_1(a){
	return (b) => {
		return (c) => {
			return a * b * c;
		}
	}
}

console.log(mul_1(9)(9)(10));

function mul_2(a, b, c) {
	return a * b * c;
}

let temp1 = mul_2.bind(null, 2);

let temp2 = temp1.bind(null, 3);

let result = temp2(4);

console.log(result);