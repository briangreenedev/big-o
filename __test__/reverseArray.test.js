const reverseArray = require('../functions/reverseArray')

test('Reverse array', () => {
	expect(reverseArray([4, 3, 12, 2, 7, 9, 1, 1]))
	.toEqual([1, 1, 9, 7, 2, 12, 3, 4]);
})

test('Reverse array with strings and numbers', () => {
	expect(reverseArray([4, 3, 'Hello', 2, 7, 9, 1, 1]))
	.toEqual([1, 1, 9, 7, 2, 'Hello', 3, 4]);
})

test('Reverse array with strings, numbers, arrays', () => {
	expect(reverseArray([4, 3, 'Hello', 2, 7, 9, [0, 12], 1]))
	.toEqual([1, [0, 12], 9, 7, 2, 'Hello', 3, 4]);
})