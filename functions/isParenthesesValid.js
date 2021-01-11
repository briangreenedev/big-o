module.exports = (expression) => {
	let a = 0;
	let b = expression.length - 1;
	let goodStanding = true;
	while(a < b) {
		if((expression[a] === '(' && expression[b] === ')') || (expression[a] !== '(' && expression[b] !== ')')) {
			a++;
			b--;
			goodStanding = true;
		} else if(expression[a] === '(') {
			b--;
			goodStanding = false;
		} else if(expression[b] === ')') {
			a++;
			goodStanding = false
		}
	}
	return goodStanding;
}