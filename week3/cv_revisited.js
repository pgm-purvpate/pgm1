const cv = {
    familyname: "",
    firstname: "",
    gender: "",
    age: 19,
    married: false,
    avatar: "https://test.com/image/hi.png",
    quote: "hi",
    language: {
        dutch: "**********",
        french: "*****",
        english: "*****"
    }
};


for (let property in cv) {
    if(property != "language")
    console.log(`The property '${property}' has the value '${cv[property]}'.`);
    else{
        for (let property_lang in cv.language) { // might change for performance
            console.log(`The property '${property_lang}' has the value '${cv.language[property_lang]}'.`);
        }
    }    
}


