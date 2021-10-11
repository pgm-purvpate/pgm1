function countSpecifiedCharacter(str, c){
    return str.split(c).length - 1;
}

console.log(countSpecifiedCharacter("JavaScript", "a"))