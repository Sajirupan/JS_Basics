// 2025-11-12


// Basic Object

let car = {
    brand: "Toyato",
    color: "Blue",
    model: "Camry",
    Price: "15000000",
    isNew: "true"
};
console.log(car[`color`])

// adding new property
car[`Model year`] = "2025";
console.log(car);
car.modelYear = 2025;
console.log(car);

//deleting property
delete car.Price;
console.log(car);

let studentDataBase ={
    Jeru : {
        age : 20,
        Email : "jeru@gmail.com"
    },
    Kapi : {
        age : 20,
        Email : "kapi@gamil.com"
    }
}
console.log(studentDataBase);

let arr =  [];
arr [100] = 99;
console.log(arr[99]);
console.log(arr)


let fruits = ["apple","banana"];
// add end
fruits.push("grape");
console.log(fruits);
// remove end
fruits.pop();
console.log(fruits);
//add start
fruits.unshift("orange")
console.log(fruits);
//remove start
fruits.shift();
console.log(fruits);

let colors = ["red","green","blue"];
console.log(colors);
//remove center (green)
colors.splice(1,1,);
console.log(colors);
//replace item
colors.splice(1,1,"yellow");
console.log(colors);



// object Questions


//1.How do you create an empty JavaScript object?
let Person = {};

//2. Create an Object with Properties and Methods
let person = {
  name: "Saji",
  age: 21,
  IntroduceYou: function(p) {
    console.log(`Hi, my name is ${p.name} and I am ${p.age} years old.`);
  }
};
person.IntroduceYou(person);

//3. Create a Method that Greets Students
let personn = {
  name: "Kapi",
  age: 20,
  greetStudent: function(student) {
    console.log(`Hello ${student.name}, Welcome to the Coding School!`);
  }
};
let Student = {
  name: "Kapi"
};
personn.greetStudent(Student);

//4. Access Object Properties
let personnn = {
  name: "Thuva",
  age: 22,
  city: "Jaffna"
};

console.log(personnn.name);  
console.log(personnn.age);    
console.log(personnn["city"]);  
console.log(personnn["age"]);   

//5. Add a New Property                               (5,6 for me)
let Personn = {
  name: "Api",
  age: 20
};
Personn.email = "api@gmail.com";
console.log(Personn);

//6. Remove a Property
let PERSON = {
  name: "Roni",
  age: 20,
  email: "roni@gmail.com"
};
console.log(PERSON);
delete PERSON.email;
console.log(PERSON);

//7. Check Property Existence
// person object
let PERSONN = {
  name: "Jeru",
  age: 20,
  city: "Mannar"
};
// in' operator 
console.log("name" in PERSONN);   // true
console.log("email" in PERSONN);  // false
// hasOwnProperty() method 
console.log(PERSONN.hasOwnProperty("age"));   // true
console.log(PERSONN.hasOwnProperty("email")); // false

//8. Merge Two Objects
let student = {
  name: "Saran",
  age: 24
};
let course = {
  courseName: "JavaScript",
  duration: "6 months"
};
let studentCourse = { ...student, ...course };
console.log(studentCourse);