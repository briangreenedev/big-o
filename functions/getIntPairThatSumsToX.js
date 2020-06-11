module.exports = (x) => {
	const doTheCalculation = (intArray) => {
		if(typeof x === 'undefined') return
		const hashTable = {}
		for (let i = 0; i < intArray.length; i++) {
			if(hashTable[x - intArray[i]])
				return [intArray[i], x - intArray[i]]
			hashTable[intArray[i]] = true
		}
	}
	return doTheCalculationg
}