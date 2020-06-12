const duplicateEvenNumbers = require('../functions/duplicateEvenNumbers')

test('Duplicate even numbers', () => {
	expect(duplicateEvenNumbers([1, 10, 6, 3, 7, 1, 2, -1, -1, -1]).sort())
	.toEqual([1, 10, 10, 6, 6, 3, 7, 1, 2, 2].sort())
})

test('Duplicate even numbers with all even numbers in list', () => {
	expect(duplicateEvenNumbers([4, 8, 6, 2, 10, 2, -1, -1, -1, -1, -1, -1]).sort())
	.toEqual([4, 4, 8, 8, 6, 6, 2, 2, 10, 10, 2, 2].sort())
})

test('Duplicate even numbers with all odd numbers in list', () => {
	expect(duplicateEvenNumbers([3, 7, 1, 9, 11, 31]).sort())
	.toEqual([3, 7, 1, 9, 11, 31].sort())
})