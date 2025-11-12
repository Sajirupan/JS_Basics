// console.log("Sajirupan");
// console.log("Puttur");
// console.log("Age-21");
// console.log("Trip");



// console.log("5+7");
// document.getElementById("text").innerHTML="Hello World";
// document.write("This is a popular Web page");
// window.alert("You are a wrong member");
// console.log("Java Script is fun");
// const name="Saji";
// var age="21";
// let subject="Maths";
// console.log(name);
// console.log(age);
// console.log(subject);
// var favcolor =prompt("inout your favorite color");
// console.log(favcolor);
// document.body.style.backgroundColor = favcolor;
// let price = 500;
// let quanity =150;
// let display = price * quanity;
// console.log(display);
// let color;
// console.log(color);
// let firstname = "Saji";
// let lastname = "Rupan";
// console.log("My name is"+" "+firstname +" "+ lastname);
// let age = "21" ;
// console.log(typeof age);


// // 2025-11-10


// // Hoisting
// console.log(name);
// var name="saji";
// console.log(name);
// const name="saji";
// console.log(name);
// let name="saji";

// // Scope
// {
//     const x=25;
//     console.log(x);
// }
// console.log(x);
// {
//     let x=25;
//     console.log(x);
// }
// console.log(x);
// {
//     var x=25;
//     console.log(x);
// }
// console.log(x);

// console.log(Nuw);
// var Nuw = 25;

// {var x = 25;
//     console.log(x)
// }
//  console.log(x)



// 2025-11-11

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE*2);
// console.log(Number.MIN_VALUE/2);
// console.log(Number.EPSILON);
// console.log("Number.MIN_VALUE");
// console.log(5e-4);
// console.log(5e+4);
// console.log(Number.string/16);
// // let.z=56.789
// // console.log(z.toString(2));
// // let.distance=12.3456;
// // console.log(distance.toFixed(3));
// let name="Saji";
// let l_name="Rupan";
// x=name.toUpperCase();
// console.log(x);
// console.log(l_name.toLowerCase());
// console.log(name.charAt(2));
// console.log(`Welcome to UKI, ${name}`);
// console.log(name.lenght);
// console.log(l_name.slice(1,4));
// console.log(l_name.substring(1,4));
// console.log(name.replace("S","Z"));
// console.log(l_name.replaceAll());
// let f_name="       Sajirupan      ";
// console.log(f_name.trimStart());
// console.log(f_name.trimEnd());
// console.log(f_name.trim())
// let text="Kapi,Roni,b,c,d,e,f";
// const myArray = text.split("");
// console.log(myArray[1]);
// let fullname=name.concat(" ",l_name);
// console.log(fullname);
// let textt ="5";
// console.log(textt.padStart(4,"0"));
// console.log(textt.padEnd(4,"0"));
// // let x;
// // console.log(Boolean(x));
// // let y=10;
// // console.log(Boolean(y));
// // let z=0;
// // console.log(Boolean(z));

// let e=5;
// let f=10;
// console.log(Boolean(e>f));
// console.log(Boolean(e<f));
// let Name=true;
// if(Name){
//     console.log("Your name is Kapi")
// }
// else{
//     console.log("Invalide Name")
// }
// let num1 =15;
// let num2 =20;
// if(num1>num2){
//     console.log("correct")
// }
// else{
//     console.log("wrong")
// }
// let x1=false;
// let y1=new Boolean(false);
// console.log(x1==y1);
// console.log(x1===y1);


// // Get user input
// let customerName = prompt("Enter your name:");
// let price = Number(prompt("Enter the product price:"));

// // Fixed discount percentage
// let discountPercent = 17.33; // 17.33% discount

// // Calculate discount amount and total
// let discountAmount = (price * discountPercent) / 100;
// let TOTAL = price - discountAmount;

// // Display receipt in console
// console.log("🧾 Receipt");
// console.log("Customer: " + customerName.toUpperCase());
// console.log("Original Price: LKR " + price.toFixed(2));
// console.log("Discount (" + discountPercent + "%): LKR " + discountAmount.toFixed(2));
// console.log("Total after discount: LKR " + TOTAL.toFixed(2));

// // Show final message.p -
// alert(
//   "Hello " + customerName + "!\n" +
//   "Your total after " + discountPercent + "% discount is LKR " + TOTAL.toFixed(2)
// );



// Questions


// 1. Round floating number to 2 decimals with currency symbol
let price = 125.6789;
let roundedPrice = price.toFixed(2);
console.log(`Rs ${roundedPrice}`);

// 2. Get user's full name and display in uppercase without extra spaces
let fullName = prompt("Enter your full name:");
let cleanName = fullName.trim().toUpperCase();
console.log(`My name is: ${cleanName}`);

// 3. Format receipt with proper alignment using padEnd()
let item = "Keyboard";
let pricee = 2500;
let formatted = `Item: ${item.padEnd(15)}  Price: Rs ${price.toFixed(2)}`;
console.log(formatted);  

 // 4. Safely convert "123abc" to number and handle NaN
let value = "123abc";
let converted = Number(value); // Try converting to number
if (Number.isNaN(converted)) {
  console.log("Invalid number!");
} else {
  console.log(`Converted number: ${converted}`);
}

// 5. Calculate total of product prices with comma formatting
function getTotal(prices) {
  let total = prices.reduce((sum, price) => sum + price, 0);
  return total.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
let productPrices = [3254.69, 425.65, 5245.75];
 console.log(`Total: Rs ${getTotal(productPrices)}`);

 // 6. Clean unwanted characters from text input
let text = "hello@@world@@!";
let cleaned = text.replaceAll("@", "");
console.log(cleaned);







 












