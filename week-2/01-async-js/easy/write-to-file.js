const fs = require('fs');

function readData(data) {
	fs.writeFile('100xDevs/week-2/01-async-js/easy/a1.txt', data, (err) => {
		if (err) {
			console.log('Some error' + err.message);
			return;
		}
		console.log('No error');
	});
}
readData('Hello is changed from js file');
