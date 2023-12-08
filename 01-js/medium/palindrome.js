/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
	str = str.toLowerCase();
	str = str.replace(/[.,\/?#!$%\^&\*;:{}=\-_`~()]/g, '');
	ar = str.split(' ').join('').split('');
	let len = ar.length;
	let tempAr = ar;
	let result = [];
	while (len > 0) {
		len -= 1;
		let lastChar = ar[len];
		result.push(lastChar);
	}
	return tempAr.join('') == result.join('');
}

module.exports = isPalindrome;
