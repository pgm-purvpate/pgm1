const fruits = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 }, 
    { name: 'cherries', quantity: 5 }
]

let foundIndex = fruits.findIndex(fruit => fruit.name === "bananas");
console.log(foundIndex);

let filteredInventory = fruits.filter(fruit => fruit.quantity > 0);
console.log(filteredInventory);


let tempStr = "";

filteredInventory.forEach((item, index)=>{
    tempStr += `Product ${index}: ${item.name} \n` 
})

console.log(tempStr);