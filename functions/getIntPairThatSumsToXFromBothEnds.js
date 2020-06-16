module.exports = (arr, x) => {
	const sum = (front, end) => {
		return arr[front] + arr[end]
	}

	let frontIndex = 0
	let endIndex = arr.length - 1

	while(sum(frontIndex, endIndex) !== x) {
		if(sum(frontIndex, endIndex) < x)
			frontIndex ++
		if(sum(frontIndex, endIndex) > x)
			endIndex --
	}

	return [arr[frontIndex], arr[endIndex]]
}