const students = [
    { id: 1, name: "Arun", mark: 85 },
    { id: 2, name: "Anu", mark: 72 },
    { id: 3, name: "Rahul", mark: 45 },
    { id: 4, name: "Meera", mark: 92 }
];

//? addStudent(student)	Add a new student
const addStudent = (student) => {
    students.push(student);

}
const studen = { id: 5, name: "Ravi", mark: 78 };
addStudent(studen);


//? getStudentById(id)	Find a student
const getStudentById = (id) => {
    return students.find((student) => id === student.id)
}


//? getAllStudents()	Return all students
const getallstudents = () => students;


//? getGrade(mark)	Calculate student grade

const getGradestudent = (mark) => {
    if (mark >=  85) {
        console.log("Student grade is A")
    } else if(mark >= 70 && mark <=84) {
        console.log("Student grade is B")
    }
    else if(mark >= 60 & mark <=69) {
        console.log("Student grade is C")
    }
    else if(mark >= 50 && mark <=59) {
        console.log("Student grade is D")
    }
    else if(mark >= 40 && mark <= 58) {
        console.log("Student grade is E")
    }
    else if(mark < 40){
        console.log("You are failed. Try again")
    }
}

//? isPassed(mark)	Check pass/fail

const ifPassed = (mark) => {
    if(mark >= 40){
        console.log("You are passed!")
    }
    else if(mark < 40){
        console.log("You are failed! Try Again ")
    }
}



//? calculateAverage()	Calculate average marks

const calculateAverage = () => {
    const totalMarks = students.reduce((acc, student) => acc + student.mark, 0);
    const averagemark = totalMarks / students.length;
    console.log("Average Marks: " + averagemark);
}


const student = getStudentById(3) 
console.log(student)
console.log(getallstudents());
getGradestudent(35)
ifPassed(32)
calculateAverage()
console.log(students);