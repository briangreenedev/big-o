const subArraySumEqualsTargetSlidingWindow = require('../functions/subArraySumEqualsTargetSlidingWindow')


test('Get integers of contiguous subarray where its sum equals 24', () => {
	expect(subArraySumEqualsTargetSlidingWindow([11, 2, 3, 1, 5, 9, 7, 8, 9, 10, 7, 20, 4, 3, 89, 12], 24))
	.toEqual([9, 7, 8])
})

test('Get integers of contiguous subarray where its sum equals 12 with 1 element in array', () => {
	expect(subArraySumEqualsTargetSlidingWindow([12], 12))
	.toEqual([12])
})

test('Get integers of contiguous subarray where its sum equals 344 where there are no solutions', () => {
	expect(subArraySumEqualsTargetSlidingWindow([11, 2, 3, 1, 5, 9, 7, 8, 9, 10, 7, 20, 4, 3, 89, 12], 344))
	.toEqual([])
})