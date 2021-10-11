/*
Student_obj (pseudocode)
familyname = string
firstname = string
gender = number
birthday = string
totalcourses = number (Added)
courses = obj {
    courseobj {
        name: "naam",
        teacher: {
            teacher1: "Mathieu ...."
        }
    }
}

*/

const student_obj = {
    familyname: "Van Hecke",
    firstname: "Dion ",
    gender: 1,
    birthday: "Fri Dec 12 1980",
    totalcourses: 3, /* Temporarily */
    courses: {
        course1: {
            name: "Computer Systems",
            lecturer: "Thibault Fouquaert, Lennart Dubois"
        },
        course2: {
            name: "Web Design",
            lecturer: "Mathieu Spillebeen"
        },
        course3: {
            name: "Programming",
            lecturer: "Thibault Fouquaert, Philippe De Pauw - Waterschoot"
        }
    }

}

let iterations_courses = student_obj.totalcourses; /* For last index (tricky asf) */


function generateStringForGender(gender){ /* ARG = student.obj.gender */
    switch(gender){ // index -> student_obj.gender
        case 1: /* Male */
            return "male";
        break;
        case 2: /* Female */
            return "female";
        break;
    }

} 

function generateStringForLecturers(Lecturer_name) {
    return `Lecturers: ${Lecturer_name}`;
}


function generateStringForCourses(student_obj) { /* ARG1 = student_obj.courses */
console.log(`======================================================
COURSES
======================================================`);
    for(course in student_obj){
        console.log(`Course: ${student_obj[course].name}`); /* Print course.name */
        console.log(generateStringForLecturers(student_obj[course].lecturer)) /* Actually unneeded */

        if (!--iterations_courses) /* Hacky solution */
        console.log("======================================================"); /* Last item */
        else
         console.log("------------------------------------------------"); /* first & items inbetween */
    }
}


function generateStringForStudent(student) { /* ARG = student_obj */
    /* string */
console.log(`
======================================================
|                STUDENT INFORMATION                 |
======================================================
PERSONAL
======================================================
Name: ${student.firstname + student.familyname}
Gender: ${generateStringForGender(student.gender)}
Day of birth: ${student.birthday}`);
generateStringForCourses(student_obj.courses);
}


generateStringForStudent(student_obj);