const getIntPairThatSumsToX = require('../functions/getIntPairThatSumsToX')
const initFunctionX14 = getIntPairThatSumsToX(14)
const initFunctionX0 = getIntPairThatSumsToX(0)
const initFunctionXUndefined = getIntPairThatSumsToX()

test('Get integer pair that sums to 14', () => {
	expect(initFunctionX14([4, 3, 12, 2, 7, 9, 1, 1])
	.sort())
	.toEqual([12, 2].sort());
})

test('Get integer pair that sums to 14 from the edges', () => {
	expect(initFunctionX14([13, 3, 2, 3, 7, 9, 0, 1])
	.sort())
	.toEqual([13, 1].sort());
})

test('Get integer pair that sums to 14 with a zero', () => {
	expect(initFunctionX14([2, 3, 14, 3, 7, 9, 0, 1])
	.sort())
	.toEqual([14, 0].sort());
})

test('Get integer pair that sums to 0', () => {
	expect(initFunctionX0([2, 0, 14, 3, 7, 9, 0, 1])
	.sort())
	.toEqual([0, 0].sort());
})

test('Get integer pair where X is undefined', () => {
	expect(initFunctionXUndefined([2, 0, 14, 3, 7, 9, 0, 1]))
	.toEqual(undefined);
})

