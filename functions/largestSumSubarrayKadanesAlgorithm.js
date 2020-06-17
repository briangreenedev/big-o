module.exports = (arr) => {
	let maxSum = arr[0]
	let maxSumHere = arr[0]
	let first = 0
	let last = 0

	for (let i = 1; i < arr.length - 1; i++) {
		maxSumHere = Math.max(arr[i], maxSumHere + arr[i])
		if(arr[i] >= maxSumHere)
			first = i
		maxSum = Math.max(maxSumHere, maxSum)
		if(maxSumHere >= maxSum)
			last = i
	}
	return arr.slice(first, last + 1)
}