const colors = ["Red", "Green", "White", "Black"]; // Defined colors

let arrLength = colors.push("Yellow", "Blue");// push Yellow & blue onto the colors array
console.log(arrLength);// Length of array after pushing

console.log(colors);// Log elements

let removedElement = colors.pop();// Remove last element
console.log(colors);// Log elements after removing element

removedElement = colors.push("Orange"); // Push Orange onto colors array
console.log(removedElement); /* Array size */

console.log(colors);// Log elements

removedElement = colors.shift();// Remove first element;
console.log(removedElement);

console.log(colors);

arrLength = colors.push("Fuchsia", "Purple");//push Fuchsia & purple onto the colors array
console.log(arrLength);

console.log(colors);

const copy = colors.copy;
console.log(copy);



