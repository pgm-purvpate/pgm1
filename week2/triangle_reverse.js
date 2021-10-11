let b = 10;
let h = b;
let char = "*";
let sep = " ";

let triangle = "";

for (let i = 0; i < h; i++) {
	for (let j = 0; j <= i; j++) { // j <= i because i will be the same amount, first it will be 1, next it will be 2 etc
		triangle += char + sep;
	}
	triangle += "\n";
}

// two nested loops
// first loop is used to make the amount of rows
// second loop is used to make the amount of columns OR STARS in the rows

console.log(triangle);