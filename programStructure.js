// looping a triangle

function loopingATriangle() {
	for (var hash = "#"; hash.length < 8; hash += "#") {
		console.log(hash);
	}
}

// fizzBuzz
function fizzBuzz() {
	for (var count = 1; count <= 100; count++) {
		var f = count % 3;
		var b = count % 5;
		if (f === 0) {
			console.log("Fizz");
		} else if (b === 0) {
			console.log("Buzz");
		} else {
			console.log(count);
		}
	}

	for (var c = 1; c <= 100; c++) {
		var output = "";
		if (c % 3 === 0) output += "Fizz";
		if (c % 5 === 0) output += "Buzz";
		console.log(output || c);
	}
}

// chess board
function chessBoard(width, height) {
	var sizeW = width;
	var sizeH = height;
	var board = "";

	for (var i = 0; i < sizeH; i++) {
		for (var j = 0; j < sizeW; j++) {
			if ((i+j) % 2 === 0) {
				board += " ";
			} else { 
				board += "#";
			}
		} 
		board += "\n";
	}
console.log(board);
}

loopingATriangle();
//fizzBuzz();
chessBoard(20,3);
