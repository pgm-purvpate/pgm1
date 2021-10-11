const nRows = 7;
const nCols = 7;
const seperator = " ";
const character = "*";

/*
 *	5 -> 5 - 1 (For index)
 * 0,1,2,3,4 (1 = 0 index)
 */


if (nRows === nCols) { // IF SQUARE 5,5
	let message = ""; // Define empty message
	for (let i = 0; i < nRows; i++) { // Foreach Row
		if (i === 0 || i === nRows - 1) { // INDEX 0 or INDEX 4 
			for (let j = 0; j < nCols; j++) {
				message += character + seperator;
			}
		} else {
			for (let j = 0; j < nCols; j++) { // For each Column
				if (j === 0 || j === nCols - 1)  { // INDEX 0 or INDEX 4
					message += character + seperator; // ADD CHARACTER
				} else { // INDEX 1,2,3
					if(i === j || j === nCols - 1 - i){ //index == j, j === nCols - 1 - i
						message += character + seperator;
					}else{
					message += seperator + seperator; //FILL UP SPACE
					}
				}
			}
		}
		message += "\n"; // Add newline
	}

	console.log(message); // Log message
} else {
	console.log("Columns en rows moet gelijk zijn"); // is not square
}