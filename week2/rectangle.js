let nCols = 6;
let nRows = 4;
let char = "*";
let sep = " ";

let rect = "";

for (let i = 0; i < nRows; i++) {
	for (let j = 0; j < nCols; j++) {
		rect += char + sep;
	}
	rect += "\n";
}

console.log(rect);