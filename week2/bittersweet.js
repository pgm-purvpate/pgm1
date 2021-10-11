let num = 15;
let msg = "";

for (let i = 1; i < num + 1; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		msg += "bittersweet\n";
	} else if (i % 3 === 0) {
		msg += "bitter\n";
	} else if (i % 5 === 0) {
		msg += "sweet\n";
	} else {
		msg += i + '\n';
	}
}
