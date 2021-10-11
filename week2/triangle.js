let b = 10;
let h = b;
let char = "*";
let sep = " ";

let triangle = "";

for (let i = 0; i < h; i++) {
	for (let j = 0; j < h - i; j++) { // -i for from "b" to 1
		triangle += char + sep;
	}
	triangle += "\n";
}

console.log(triangle);