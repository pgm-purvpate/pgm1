const array = ["ant", "bison", "camel", "duck", "bison"];

let foundIndex = array.indexOf("bison"); // search index of bison
console.log(foundIndex); // bison = index 1

foundIndex = array.indexOf("bison", 2); // bison = index 4 (From index 2  camel -> duck -> bison)
console.log(foundIndex); // bison = index 4

foundIndex = array.indexOf("capibara");
console.log(foundIndex); // -1 not found in array

foundIndex = array.lastIndexOf("bison"); // Last index of bison = 4
console.log(foundIndex); // 4

const array_numbers = [5, 12, 8, 130, 55];

foundIndex = array_numbers.findIndex(n => n > 13);// if number higher then 13
console.log(foundIndex); // 3 = 130

foundIndex = array_numbers.find(n => n > 10); // if number higher then 10
console.log(foundIndex)// 12

const array_words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

let filteredWords = array_words.filter(s => s.length > 6);
console.log(filteredWords);

