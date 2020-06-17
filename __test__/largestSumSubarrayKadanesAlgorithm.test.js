const largestSumSubarrayKadanesAlgorithm = require('../functions/largestSumSubarrayKadanesAlgorithm')

test('Get subarray with largest sum using Kadanes Algorithm', () => {
	expect(largestSumSubarrayKadanesAlgorithm([-2, -3, 4, -1, -2, 1, 5, -1]))
	.toEqual([4, -1, -2, 1, 5])
})