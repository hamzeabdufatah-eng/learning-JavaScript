//Objects and Data Types
const students=[
  { name: "hamza", grade: 100, passed: true },
  { name: "axmad", grade: 80, passed: true },
  { name: "aamina", grade: 70, passed: true },
  { name: "jason", grade: 40, passed: false },
  { name: "abdi", grade: 90, passed: true },
];
//FUNCTION AND CONDITIONALS 
function calculateResult(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 50) {
    return "C";
  } else if(grade>=38 && grade<=45){
    return "c:near pass"
  }
  else {
    return "fail";
  }
}
//LOOPS AND OPERATORS
students.forEach(function (student) {
  let result = calculateResult(student.grade);
  if (student.passed) {
    console.log(`${student.name}:passed with grade:${result}`);
  } else {
    console.log(`${student.name}:fialed with grade:${result}`);
  }
});


