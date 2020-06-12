module.exports = (arr) => {
	// helpers
	const addToEnd = (val) => {
		arr[end] = val
		end--
	}
	const findInitialPosition = () => {
		for(let i = arr.length - 1; i !== -1; i--)
			if(arr[i] !== -1)
				return i
	}

	// main
	let end = arr.length - 1
	let i = findInitialPosition()

	while(i >= 0) {
		if(arr[i] % 2 === 0) {
			addToEnd(arr[i])
			addToEnd(arr[i])
		} else {
			addToEnd(arr[i])
		}
		i--
	}
	return arr
}