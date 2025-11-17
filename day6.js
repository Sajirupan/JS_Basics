// 2025-11-17


const employee = {
    Name : "Saji",
    age : 21,
    department : "IT Department",
    address : {
        city : "Jaffna",
        zipcode : 40000
    },
    Skills : [
        "AI","Personal Skill","Hard Ware"
    ]
}
console.log(employee.address.city)
console.log(employee["address"]["zipcode"])

// destruction
const { Name, department } = employee;
console.log(Name);
console.log(department);

// Add a method interoduce
employee.interduce = function(){
    console.log(`Hi, My name is ${this.Name}. I'm working in ${this.department}.`)
};
employee.interduce();

// arrow function
let Intro =()=>{
     console.log(`Hi, My name is ${Name}. I'm working in ${department}.`)
};
Intro()

const greet = (employee) => {
     console.log(`Hi, My name is ${this.Name}. I'm working in ${this.department}.`)
};
greet()

// Lopps throught skills arrays
employee.Skills.forEach(saji=>console.log(saji));
// Loop literation seija venum


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
