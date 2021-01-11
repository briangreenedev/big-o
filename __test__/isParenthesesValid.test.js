const isParenthisesValid = require('../functions/isParenthesesValid')

test('Get status of parenthesis validity', () => {
	expect(isParenthisesValid('(3 + 2) + ((1)'))
	.toEqual(false);
})