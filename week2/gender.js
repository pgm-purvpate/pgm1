
const i = 0;
var chalk = require("chalk");
const orange = chalk.hex('#FFA500'); // Orange color

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function switchGender(i){
    switch(parseInt(i)){
        case 0:
            console.log(orange('Niet gekend'));
            process.exit(0);
            break;
        case 1:
            console.log(chalk.blue('Man'));
            process.exit(0);

            break;
        case 2:
            console.log(chalk.red('Man'));
            process.exit(0);

            break;
        case 9:
            console.log(chalk.yellow('Niet toepasbaar'));
            process.exit(0);

            break;
        default:
            console.log("Something went wrong?");
            process.exit(0);

    }
}

rl.question("What is your gender? ", function(gender) {
    switchGender(gender);
});


