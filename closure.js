function multiplier(factor) {
	return function(number) {
		return number * factor;
	};
}

var twice = multiplier(4);
console.log(twice(6));

// multiplier returns code that gets stored in the twice variable ("number a* 4) and when twice() is called with parameter number = 6, multiplication ist done."
