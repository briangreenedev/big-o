module.exports = (arr) => {
	const newArr = []
	for(let i = 0; i < arr.length; i++)
		newArr.push(arr[arr.length - 1 - i])
	return newArr
}