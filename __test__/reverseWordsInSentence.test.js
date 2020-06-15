const reverseWordsInSentence = require('../functions/reverseWordsInSentence')

test('Reverse words in sentence', () => {
	expect(reverseWordsInSentence("This is my first sentence"))
	.toEqual("sentence first my is This");
})

test('Reverse words in sentence when there is one word', () => {
	expect(reverseWordsInSentence("Thisismyfirstsentence"))
	.toEqual("Thisismyfirstsentence");
})