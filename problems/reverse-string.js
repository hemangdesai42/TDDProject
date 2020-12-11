const reverseString = (str) => {
	if (typeof str !== 'string') throw new TypeError('Strings only');
	return str.split('').reverse().join('');
};


module.exports = reverseString;
