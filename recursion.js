function isEven(number) {
	if(number == 1) {
		return false;
	}
	else if (number === 0) { 
		return true;
	} else if (number < 0) {
		return isEven(-number); 
	} else {
		return isEven(number - 2);
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(-1));


/*###################################### */
// exampe for nested function 

function multiplyBy10(number) {
	console.log(number * 10);
}

function multiplesOf10(limit) {
	// Put your for loop here
	for(var i = 1; i <= limit; i++) {
		var result = multiplyBy10(i);
	} return result;
}

// Call the function multiplesOf10() on any integer
multiplesOf10(3);

////////////////////////////////////////////////////////////


function countLetter(string, letter) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) == letter)
			counter += 1;
		}
		return counter;
	}
	
function countBs(string) {
	return countLetter(string, "B");
}

console.log(countBs("some B & B in a B string"));
console.log(countLetter("ajksjdhjsdjj", "j"));


