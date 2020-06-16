const getIntPairThatSumsToXFromBothEnds = require('../functions/getIntPairThatSumsToXFromBothEnds')

test('Get sum in sorted int list that equals X', () => {
	expect(getIntPairThatSumsToXFromBothEnds([1, 2, 4, 7, 12, 13, 15], 22))
	.toEqual([7, 15])
})

test('Get sum in sorted int list that equals X with consecutive numbers', () => {
	expect(getIntPairThatSumsToXFromBothEnds([1, 2, 2, 2, 2, 15, 17], 4))
	.toEqual([2, 2])
})

test('Get sum in sorted int list that equals X with consecutive numbers but using only one of those numbers', () => {
	expect(getIntPairThatSumsToXFromBothEnds([1, 2, 2, 2, 2, 15, 17], 17))
	.toEqual([2, 15])
})