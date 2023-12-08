/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
	if (str1.length != str2.length) {
		return false;
	}
	let ar = str1.toLowerCase().split("");
	let br = str2.toLowerCase().split("");
	ar.sort();
	br.sort();
	for (let i = 0; i < str1.length; i++)
		if (ar[i] != br[i]) {
			return false;
		}
	return true;
}

module.exports = isAnagram;
