const fs = require('fs');

function readData() {
	const data = fs.readFile(
		'100xDevs/week-2/01-async-js/easy/a.txt',
		'utf-8',
		(err, data) => {
			console.log(data);
		}
	);
}
readData();
let a = 0;
for (let i = 0; i <= 100000000000; i++) {
	a += i;
}
console.log(a);
