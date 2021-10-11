var creditcard_numbers = [
    "1234567892123456",
    "123456789212345671",
    "1234567892123457",
    "123456789212345674"
];      

/*
Nummer moet bestaan uit 16 digits, allemaal getallen.
Tenminste twee getallen moeten verschillend zijn.
*/



function verifyCreditCardNumber(cc_num){
    var lastone = +cc_num.toString().split('').pop();

    if (lastone % 2 == 0) {//and replace numm with string.length here
        console.log("Last digit is even");
        return true;
    }else{
        console.log("Last digit is not even");
        return false;
    }

    if(cc_num.toString().length != 16)
        return false;
    else
        return true;
}


creditcard_numbers.forEach((item, index)=>{
    if(!verifyCreditCardNumber(item)){
        console.log("Creditcard gegevens niet geldig!");
    }else{
        console.log("Creditcard gegevens geldig!");
    }
})


