module.exports = (a) => {
	const arrayToBeSorted = [...a]
	let left = 0
	let right = a.length - 1

	return qs(arrayToBeSorted, left, right)
}

function partition(a, left = [], right = []) {
	const pivot = a[a.length - 1]
	let i = left
	let j = right

	while(i <= j) {
		while(a[i] < pivot)
			i++
		while(a[j] > pivot)
			j--
		if(i <= j) {
			swap(a, i, j)
			i++
			j--
		}
	}
	return i
}

function qs(a, left, right) {
	let index
	if(a.length > 1) {
		index = partition(a, left, right)
		if(left < index - 1)
			setTimeout(function() {
				qs(a, left, index - 1)
			}, 0)
		if(index < right)
			setTimeout(function() {
				qs(a, index, right)
			}, 0)
	}
	return a
}

function swap(a, i, j) {
	let tmp = a[i]
	a[i] = a[j]
	a[j] = tmp
}