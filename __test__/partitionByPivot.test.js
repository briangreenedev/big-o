const partitionByPivot = require('../functions/partitionByPivot')

test('Partition array by pivot 6', () => {
	expect(partitionByPivot([3, 6, 6, 12, 9, 2, 3, 6, 8], 6))
	.toEqual([3, 3, 2, 6, 6, 6, 9, 8, 12])
})

test('Partition array by pivot 3 with all the same value', () => {
	expect(partitionByPivot([3, 3, 3, 3, 3], 3))
	.toEqual([3, 3, 3, 3, 3])
})

test('Partition array by pivot 7 with empty array', () => {
	expect(partitionByPivot([], 7))
	.toEqual([])
})