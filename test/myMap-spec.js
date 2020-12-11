const myMap = require('../problems/myMap.js');

// chai is an assertion library
const chai = require('chai');
const spies = require('chai-spies');

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

describe('myMap()', () => {
	let array;
	const callback = (el) => el * 2;

	beforeEach(() => {
		array = [1, 2, 3];
	});

	it('should not mutate the original array', () => {
		let expected = [1, 2, 3];
		myMap(array, callback);
		expect(array).to.eql(expected);
	});

	it('should not call the built-in Array.map', () => {
		const mapSpy = chai.spy.on(array, 'map');
		myMap(array, callback);
		expect(mapSpy).to.not.have.been.called();
	});

	it('should invoke callback exactly one time for each element', () => {
		const cbSpy = chai.spy(callback);
		myMap(array, cbSpy);
		expect(cbSpy).to.have.been.called.exactly(array.length);
	});
});
