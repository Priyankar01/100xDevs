function asyncFunc() {
	let p = new Promise(function () {
		setTimeout(function () {
			console.log('hi there');
		});
	});
	return p;
}

async function main() {
	let value = await asyncFunc();
	console.log(value);
}

main();
