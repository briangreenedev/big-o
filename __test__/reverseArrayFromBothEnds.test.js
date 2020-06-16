const reverseArrayFromBothEnds = require('../functions/reverseArrayFromBothEnds')

test('Reverse array', () => {
	expect(reverseArrayFromBothEnds([4, 3, 12, 2, 7, 9, 1, 1]))
	.toEqual([1, 1, 9, 7, 2, 12, 3, 4]);
})

test('Reverse array with strings and numbers with odd number of items', () => {
	expect(reverseArrayFromBothEnds([7, 4, 3, 'Hello', 2, 7, 9, 1, 1]))
	.toEqual([1, 1, 9, 7, 2, 'Hello', 3, 4, 7]);
})

test('Reverse array with strings, numbers, arrays', () => {
	expect(reverseArrayFromBothEnds([4, 3, 'Hello', 2, 7, 9, [0, 12], 1]))
	.toEqual([1, [0, 12], 9, 7, 2, 'Hello', 3, 4]);
})

test('Reverse array with 1 item', () => {
	expect(reverseArrayFromBothEnds([1]))
	.toEqual([1]);
})