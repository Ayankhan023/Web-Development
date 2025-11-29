//print 1 to 5
// for (let count = 1; count <= 5; count++ ) {
//     console.log("I am Ayan")
// }
// let sum = 0;

// for (let i = 1; i <= 5; i++) {
//     sum = sum + i;   
// }
// console.log("sum =", sum)

// While Loop

// let i = 1;

// while (i <= 5) {
//     console.log("i =", i);
//     i++;
// }

// Do while loop
// let i = 20;
// do {
//     console.log("I am Ayan");
//     i++;
// } while (i <= 10);

// for of loop: give value

// let str = "Ayan khan";

// let size = 0;
// for (let i of str) {
//     // iterator -> characters
//     console.log("i =", i);
//     size++;
// }
// console.log("size =", size)

// for in loop: give key

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for ( let key in student) {
    console.log("key =", key, "value =", student[key]);
}

