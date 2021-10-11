let nCols = 4;
let nRows = 8;
let char = "*";
let sep = " ";

let rect = "";

let flick = nRows / 2;

for (let i = 0; i < nRows; i++) { // "i" makes the amount of ROWS
	for (let j = 0; j < nCols; j++) { // "j" makes the amount of COLS
		if (i === 0 || i >= flick) { // first row stars and than everything bigger than "flick"
			rect += char + sep;
		} else if (j === 0 || j === nCols - 1) { // first and last column only stars
			rect += char + sep;
		} else { // rest just spaces
			rect += sep + sep;
		}
	}
	rect += "\n";
}

console.log(rect);