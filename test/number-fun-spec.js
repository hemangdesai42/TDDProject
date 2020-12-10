const assert = require('assert');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree()', () => {
	it('should return the number three', () => {
		let test = returnsThree();
		let result = 3;

		assert.strictEqual(test, result);
	});
});

describe('reciprocal(num)', () => {
	context('valid arguments', () => {
		it('should return the reciprocal', () => {
			let test = reciprocal(5);
			let result = 1 / 5;
			assert.strictEqual(test, result);
		});
	});

	context('invalid arguments', () => {
		it('should return a TypeError if num is outside range', () => {
			assert.throws(() => reciprocal(0), { name: 'TypeError' });
		});
	});
});
