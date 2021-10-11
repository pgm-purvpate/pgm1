function generateGUID(length){
    const hex = "0123456789ABCDEF";
    const model = "XXXXXXXXX"; // A26dY26zQ
    var str = "";
    for (var i = 0; i < length; i++) {
      var rnd = Math.floor(Math.random() * hex.length);
      str += model[i] == "X" ?  hex[rnd] : model[i] ;
    }
    return str;
}

console.log(generateGUID(9));