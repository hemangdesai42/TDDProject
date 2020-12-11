class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHello() {
		return `${this.name} says hello`;
	}

	visit(person) {
		return `${this.name} visited ${person.name}`;
	}

	switchVisit(otherPerson) {
		return otherPerson.visit(this);
	}

	update(obj) {
		if (typeof obj !== 'object' || Array.isArray(obj) || obj === null)
			throw new TypeError(`${obj} is not an object.`);

		if (!(obj.hasOwnProperty('name') && obj.hasOwnProperty('age')))
			throw new TypeError(`${obj} has no name and age properties.`);

		this.name = obj.name;
		this.age = obj.age;
	}

	tryUpdate(obj) {
		try {
			this.update(obj);
			return true;
		} catch (err) {
			// console.error(err);
			return false;
		}
	}

	static greetAll(people) {
		const greetingsArray = [];

		people.forEach((person) => {
			greetingsArray.push(person.sayHello());
		});

		return greetingsArray;
	}
}

module.exports = Person;
