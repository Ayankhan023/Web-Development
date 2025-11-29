let a = 5;
let b = 6;
// Arithemetic operators
console.log("a + b =", a + b)
console.log("a - b =", a - b)
console.log("a * b =", a * b)
console.log("a / b =", a / b)


//a++ means a + 1 and  a-- means a - 1
console.log("a % b =", a % b) //Modulus: It show remainder
console.log("a ** b =", a ** b) //Exponentiation: Means Some numbers Power
console.log("a++ =", a++) //Increment "post"(Firstly print then addition) firstly show value same
console.log(a) // then after print addition happen
console.log("a-- =", a--) //Decrement "post"(Firstly print then subtraction) firstly show value same
console.log(a) //then after print, subtracton happen

console.log("++a =", ++a)//Firstly add then print
console.log("a-- =", a--)//Firstly sub then print

// Assignment operators
a += 4; //a = a + 4
console.log(a)
a -= 4; // a = a - 4
a *= 4; // a = a multiply by 4
a -= 4; // a = a divide by 

a %= 4; // a = a modulus b : remainder 
a **= 4;// a = a to the power of 4

// Logical operators
// Logical end give true only when all conditon are true
// a = 5
// let cond1 = a < b; //true
// let cond2 = a === 5; //true
// console.log("cond1 && cond2 =", cond1 && cond2)

// Logical or give true only when atleat 1 condition are true otherwise result is false
a = 5;
let cond1 = a > b; //false
let cond2 = a === 5; //true
console.log("cond1 || cond2 =", cond1 || cond2)

// Logical not always give oppsite of result
b = 7;
a = 3;
console.log("result", !(b < a))



