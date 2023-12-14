function arithmeticFunc(a, b, funcName) {
	const result = funcName(a, b);
	return result;
}

function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

let value = arithmeticFunc(4, 2, add);
console.log(value);
value = arithmeticFunc(4, 2, sub);
console.log(value);
