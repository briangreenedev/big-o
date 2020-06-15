module.exports = (str) => {
	let result = ''
	let currentWordEnd = str.length - 1
	let i = str.length - 1

	while(i >= 0) {
		if(str[i] === ' ') {
			if(result.length > 0)
				result += ' '
			result += str.substring(i + 1, currentWordEnd + 1)
			currentWordEnd = i - 1
		}
		i--
	}

	let firstWord = str.substring(0, currentWordEnd + 1)
	if(result.length > 0)
		result += ' '
	result += firstWord

	return result
}