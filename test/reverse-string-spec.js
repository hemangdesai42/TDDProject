const reverseString = require('../problems/reverse-string');
const assert = require('assert').strict;

describe('reverseString', () => {
	context('if the argument is a valid string', () => {
		it('should reverse the passed in string', () => {
			let actual = reverseString('fun');
			let expected = 'nuf';
			assert.deepStrictEqual(actual, expected);
		});
	});

	context('if the argument is not valid', () => {
		it('should throw a TypeError', () => {
			assert.throws(() => reverseString(['fun']), TypeError);
		});
	});
});
