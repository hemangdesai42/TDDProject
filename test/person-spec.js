// chai is an assertion library
const chai = require('chai');
const spies = require('chai-spies');
const Person = require('../problems/person');

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

describe('Person class', () => {
	let person1;
	let person2;

	beforeEach(() => {
		person1 = new Person('Mai', 23);
		person2 = new Person('Erin', 24);
	});

	describe('Person class constructor()', () => {
		it('should set name property', () => {
			expect(person1).to.have.property('name', 'Mai');
		});

		it('should set age property', () => {
			expect(person1).to.have.property('age', 23);
		});
	});

	describe('Person.prototype.sayhello()', () => {
		it('should return a string of `[person name] says hello`', () => {
			let expected = `${person1.name} says hello`;
			let actual = person1.sayHello();
			expect(actual).to.equal(expected);
		});
	});

	describe('Person.prototype.visit()', () => {
		it('should return a string [person name] visited [person name]', () => {
			let expected = `${person2.name} visited ${person1.name}`;
			let actual = person2.visit(person1);
			expect(actual).to.equal(expected);
		});
	});

	describe('Person.prototype.switchVisit', () => {
		it('should flip the names in the visit function', () => {
			let expected = `${person1.name} visited ${person2.name}`;
			let actual = person2.switchVisit(person1);
			expect(actual).to.equal(expected);
		});
	});

	describe('Person.prototype.update()', () => {
		context('incoming argument is invalid', () => {
			it('should throw a TypeError if argument is not an object', () => {
				expect(() => person1.update(null)).to.throw(TypeError, 'not an object');
			});

			it('object does not have a name and age property', () => {
				expect(() =>
					person1.update({ location: 'texas', occupation: 'software engineer' })
				).to.throw(TypeError, 'no name and age');
			});
		});

		context('incoming argument is valid', () => {
			it('should update instance props to match the passed in objects values', () => {
				expect(person1.name).to.be.equal('Mai');
				expect(person1.age).to.be.equal(23);

				person1.update({ name: 'Anna', age: 12 });

				expect(person1.name).to.be.equal('Anna');
				expect(person1.age).to.be.equal(12);
			});
		});
	});

	describe('Person.prototype.tryUpdate()', () => {
		context('Person.prototype.update() is unsuccessful (throws error)', () => {
			it('should return false without throwing an error', () => {
				expect(person2.tryUpdate(null)).to.be.false;
				expect(person2).to.not.be.null;
				expect(person2).to.have.property('name', 'Erin');
				expect(person2).to.have.property('age', 24);
			});
		});

		context('Person.prototype.update() is successful', () => {
			it('should update instance props and return true', () => {
				expect(person2).to.have.property('name', 'Erin');
				expect(person2).to.have.property('age', 24);

				expect(person2.tryUpdate({ name: 'Joe', age: 80 }));

				expect(person2).to.have.property('name', 'Joe');
				expect(person2).to.have.property('age', 80);
			});
		});
	});

	describe('Person.greetAll()', () => {
		it('should call sayHello() method on each passed person instance and store in an array', () => {
			const expected = [];
			expected.push(person1.sayHello());
			expected.push(person2.sayHello());

			const actual = Person.greetAll([person1, person2]);
			expect(actual).to.eql(expected);
		});
	});
});
