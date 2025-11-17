// 2025-11-10


// Hoisting
console.log(name);
var name="saji";
console.log(name);
const name="saji";
console.log(name);
let name="saji";

// Scope
{
    const x=25;
    console.log(x);
}
console.log(x);
{
    let x=25;
    console.log(x);
}
console.log(x);
{
    var x=25;
    console.log(x);
}
console.log(x);

console.log(Nuw);
var Nuw = 25;

{var x = 25;
    console.log(x)
}
 console.log(x)