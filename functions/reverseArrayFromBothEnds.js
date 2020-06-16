module.exports = (arr) => {
	let frontIndex = 0
	let frontIndexThreshold = 0
	let endIndex = arr.length - 1

	if(arr.length % 2 === 0)
		frontIndexThreshold = -1

	while(frontIndexThreshold !== endIndex) {
		let frontTempValue = arr[frontIndex]
		arr[frontIndex] = arr[endIndex]
		arr[endIndex] = frontTempValue
		frontIndex++
		frontIndexThreshold++
		endIndex--
	}

	return arr
}