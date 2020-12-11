// chai is an assertion library
const chai = require('chai');
const spies = require('chai-spies');
const Person = require('../problems/person');

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

describe('person class', () => {
	const person1 = new Person('Mai', 23);
	const person2 = new Person('Erin', 24);

	describe('initializes the constructor properly', () => {
		it('should set name property', () => {
			expect(person1).to.have.property('name');
			expect(person1.name).to.equal('Mai');
		});

		it('should set age property', () => {
			expect(person1).to.have.property('age');
			expect(person1.age).to.equal(23);
		});
	});

	describe('person.prototype.sayhello', () => {
		it('should return a string of person name and greeting message', () => {
			let expected = 'Erin says hello';
			let actual = person2.sayHello();
			expect(actual).to.equal(expected);
		});
	});

	describe('person.prototype.visit', () => {
		it('should return a string stating that the passed in person visited', () => {
			let expected = 'Mai visited Erin';
			let actual = person1.visit(person2);
			expect(actual).to.equal(expected);
		});
	});

	describe('person.prototype.switchVisit', () => {
		it('should flip the names for the visit function', () => {
			let expected = 'Erin visited Mai';
			let actual = person1.switchVisit(person2);
			expect(actual).to.equal(expected);
		});
	});

	describe('person.prototype.update', () => {
		context('incoming argument is valid', () => {
			it('should be updated to match the passed in objects values', () => {
				person1.update({ name: 'Anna', age: 12 });
				let expectedName = 'Anna';
				let expectedAge = 12;

				expect(person1.name).to.be.equal(expectedName);
				expect(person1.age).to.be.equal(expectedAge);
			});
		});

		context('incoming argument is invalid', () => {
			it('argument is not an obj', () => {
				expect(() => person1.update(100)).to.throw(TypeError);
			});
			//expect(() => reverseString(5)).to.throw(TypeError);
			it('object does not have a name and age property', () => {
				expect(() =>
					person1.update({ color: 'purple', hairColor: 'green' })
				).to.throw(TypeError);
			});
		});
	});
});
