const { url } = require("inspector");

const cv = {
    lastName: "Van Hecke",
    firstName: "Dion",
    gender: "M",
    age: 19,
    married: false,
    avatar: "url",
    quote: "Oke",
    languageknowledge: {
        dutch: "\nDutch: *******"
    }
};

const cv_message = `
My personal Curriculum Vitae
============================================================
Lastname: ${cv.lastName}
Firstname: ${cv.firstName}
Gender: ${cv.gender}
Age: ${cv.age}
Married: ${cv.married}
Avatar: ${cv.url}
Quote: ${cv.quote}
------------------------------------------------------------

Languages: ${cv.languageknowledge["dutch"]}
`;

console.log(cv_message);
