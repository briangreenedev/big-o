const generator = require('random-array-generator')

module.exports = (func) => {
	const plot = []
	let elements = 100
	for(let i = 0; i < 5; i++) {
		let arr = generator.randomArray({
			min: 1,
			max: 1000,
			elements
		})

		let start = new Date().getTime()
		func(arr)
		let finish = new Date().getTime()
		plot.push([elements, finish - start])

		elements = elements * 2
	}

	return plot
}