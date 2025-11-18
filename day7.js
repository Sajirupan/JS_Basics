// 2025-11-18


let students = [
    {name : "Saji", score :76 },
    {name : "Jeru", score :97 },
    {name : "Kapi", score :78 },
    {name : "Thuva", score :99 }
];
students.forEach(saji=>console.log(saji));
// print all student names
students.forEach(saji=>console.log(saji.name));

// create a new array of scores using map()
students.map(saji=>console.log(saji.score));
const scores = students.map( student => student.score);
console.log(scores);

// filter students who scored more than 80
const topStudents = students.filter(student => student.score>80);
console.log(topStudents);


// reduse
const totalscore = students.reduce((sum,student)=>sum + student.score);
const avgscore = totalscore/students.length;
console.log(avgscore);
console.log(students.some(student=>student.score>80));
console.log(students.every(student=>student.score>80));

// flat and flatmap
const nested=[[1,2],[3,4],[5,6]];
console.log(nested.flat());
const flatMapped=nested.flatMap(arr=>arr.map(n=>n*2));
console.log(flatMapped);