//console.log(Math.min(2, 4) + 100);

function min(firstArgument, secondArgument) {
	if(firstArgument < secondArgument) {
		return firstArgument;
	} else { 
		return secondArgument;
	}
}

console.log(min(89, 77));
console.log(min(-8, -7));
console.log(min(0, null));


