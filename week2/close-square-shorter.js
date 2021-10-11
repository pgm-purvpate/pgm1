let nCols = 7;
let nRows = 7;
let char = "*";
let sep = " ";

let rect = "";

if(nRows === nCols){

    for (let i = 0; i < nRows; i++) { // "i" makes the amount of ROWS
        for (let j = 0; j < nCols; j++) { // "j" makes the amount of COLS
            if (i === 0 || i === j || i === nRows - 1) { // first and last row AND IF "i" equals "j" only stars
                rect += char + sep;
            } else if (j === 0 || j === nCols - 1 || j === nCols - 1 - i) { // first and last column AND IF "j" equals the amount of COLS - 1 - "i" only stars
                rect += char + sep;
            } else { // rest just spaces
                rect += sep + sep;
            }
        }
        rect += "\n";
    }
}else{
	console.log("Columns en rows moet gelijk zijn"); // is not square
}

console.log(rect);