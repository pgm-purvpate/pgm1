function compare(num1, num2, num3) {
	if (num3 > num2 && num1 > num3) {
		return num1 + ' is the biggest number';
	} else if (num2 > num1 && num2 > num3) {
		return num2 + ' is the biggest number';
	} else {
		return num3 + ' is the biggest number';
	}
}
var results = compare(10, 20, 30);
console.log(results);