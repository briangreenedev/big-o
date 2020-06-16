module.exports = (arr, p) => {
	const swap = (x, y) => {
		let tempX = arr[x]
		arr[x] = arr[y]
		arr[y] = tempX
	}

	let i = 0
	let low = 0
	let high = arr.length - 1

	while(i <= high) {
		if(arr[i] < p) {
			swap(i, low)
			i++
			low++
		} else if(arr[i] > p) {
			swap(i, high)
			high--
		} else
			i++
	}

	return arr
}