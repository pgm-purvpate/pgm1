function reverse(num_to_reverse){
    let r = num_to_reverse.toString().split('').reverse().join('');
    return Math.sign(num_to_reverse) * parseInt(r);
}

console.log(reverse(12345));