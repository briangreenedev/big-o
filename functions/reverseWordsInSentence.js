module.exports = (str) => {
	let result = ''
	let endOfCurrentWord = str.length - 1
	let i = str.length - 1

	while(i >= 0) {
		if(str[i] === ' ') {
			if(result.length > 0)
				result += ' '
			result += str.substring(i + 1, endOfCurrentWord + 1)
			endOfCurrentWord = i - 1
		}
		i--
	}

	const firstWord = str.substring(0, endOfCurrentWord + 1)
	if(result.length > 0)
		result += ' '
	result += firstWord

	return result
}