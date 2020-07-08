module.exports = (a, t) => {
	const subSum = () => {
		if(i === j)
			return a[i]
		return a.slice(i, j + 1)
		.reduce((a, b) => a + b, 0)
	}

	let i = 0
	let j = 0
	let found = false

	while(j < a.length && !found) {
		if(subSum() === t)
			found = true
		if(subSum() > t) {
			if(i === j)
				j++
			i++
		}
		if(subSum() < t)
			j++
	}
	
	return found
		? a.slice(i, j + 1)
		: []
}