const quickSort = require('../functions/quickSort')

test('Quick sort integers', () => {
	expect(quickSort([1,3,6,4,1,2,12]))
	.toEqual([1,1,2,3,4,6,12])
})