const name = "Dion";
const result = `mijn naam is ${name}`;

// object initializer
const car = {
    brand: "volkswagen",
    model: "golf",
    //model= property met type string
}; //car= object 

//log model
console.log(car.model);

//change model
car.model = "polo";
console.log(car);

// add color
car.color = "balck";
console.log(car.color);
console.log(car);

// add construction-year (hyphen) name
car["construction-year"] = "2000";
console.log(car);

const property = "horsePower"
const value = "150";
// wat ik wil doen 
//car.horsePower = 150;
car[property] = value; //car["horsePower"] = 150;
console.log(car);

//delete construction-year
delete car["construction-year"];
console.log(car);


const person ={
    firstName: "Dion",
    lastName: "Van Hecke",
    toFullName: function(){
        //stupid function 
        return "Dion Van Hecke";
    },
};
console.log(person.toFullName())

//enhance function 
person.toFullName = function(){
    //return this.firstName + " " + this.lastName
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
};
console.log(this);
console.log(person.toFullName());

person.age ={
    value: 19,
    toString: function(){
        // Doesn't work firstname undefined
        return `${this.firstName} is ${this.value}`;
    },
};
console.log(person);
console.log(person.age.value); //18
console.log(person.age.toString()); // undefined is 18

const CustomMath = {
    PI:3.141592653589793,
    random: function(){

    },
    pow:function(base, root) {
        return base ** root;
    },
};
const random = Math.random() * 20;
console.log(Math.PI)
console.log(CustomMath.PI);
//console.log(CustomMath.pow()); -> NAN

//String, string is a internal object
let classroom = "B24";
console.log(classroom);
classroom = new String("B24");
console.log(classroom);

//String methods

console.log(classroom.toLowerCase()); // b24
console.log(classroom.toUpperCase()); // B24
console.log(classroom.length); // 3
console.log(classroom.charAt(0)); // B
console.log(classroom.indexOf('B')); // 0
console.log(classroom.indexOf('b')); // (-1) case sensitive
console.log(classroom.indexOf('C')); // -1
console.log(classroom.replace("B", "A")); // A24
console.log(classroom.replace("B2", "A1")); // A14

const sentence = "Dit is een zin met meerdere woorden";
console.log(sentence.split(" "));

const badString = "      Hoi       ";
console.log(badString.trim()); // Hoi


