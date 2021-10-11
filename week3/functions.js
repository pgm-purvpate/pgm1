let i_ = 0;


i_++;
const a = "Yordi says " + i_;
i_++;
const b = "Travis says " + i_;
i_++;
const c = "Jef says" + i_;
i_++;
const d = "Lotte says" + i_;

let i = 0;

function sayHi(name) {
    console.log(`${name} says ${i++}`);
}

sayHi("Yordi");
sayHi("Travis");
sayHi("Jef");
sayHi("Lotte");


function sayHello(){
    console.log("hello");
}

sayHello();


function add(i){
    console.log(i + i);
}

add(1);
add(2);
add(3);

function sayHiOption1() {
    console.log("Hello");
}

sayHiOption1();// WERKT WEL

console.log(sayHiOption1);
console.log(typeof sayHiOption1);

sayHiOption1();
//sayHiOption2(); // WERKT NIET
const sayHiOption2 = function() {
    console.log("Hello 2");
};

sayHiOption2();

let add_simple = (a) => (a + (a));

console.log(add_simple(1));

let car = {
    doors: 4,
    driving: true,
}

function multiplyVehicleDoors(vehicle) {
    vehicle.doors *= 2
    console.log(vehicle);
}

multiplyVehicleDoors(car);

console.log(car);

function multiplyDoors(doors) {
    doors *= 2;
    console.log(doors);
}

multiplyDoors(car.doors);

