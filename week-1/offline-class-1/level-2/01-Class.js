class Animal {
	constructor(name, legCount) {
		this.name = name;
		this.legCount = legCount;
	}
	describe() {
		console.log(`${this.name} has ${this.legCount} legs`);
	}
}

let lion = new Animal('Shiro', 4);
lion.describe();
