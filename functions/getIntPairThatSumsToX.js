module.exports = (x) => {
	const calculation = (arr) => {
		let hash = {}
		for (let i = 0; i < arr.length; i++) {
			if(hash[x - arr[i]])
				return [arr[i], x - arr[i]]
			else
				hash[arr[i]] = true
		}
	}
	return calculation
}