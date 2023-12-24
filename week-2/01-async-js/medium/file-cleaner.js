const fs = require('fs');

async function changeData() {
	fs.readFile(
		'100xDevs/week-2/01-async-js/medium/a.txt',
		'utf-8',
		function (err, data) {
			data = data.split(/\s+/);
			data = data.join(' ');

			fs.writeFile('100xDevs/week-2/01-async-js/medium/a.txt', data, (err) => {
				if (err) {
					console.log(err.message);
				}
				console.log('No error');
			});
		}
	);
}

changeData();
