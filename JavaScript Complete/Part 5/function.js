// function myFunction() {
//     console.log("Welcome to Apna College");
//     console.log("We are learnig JS:)");
// }
// myFunction();

// function myFunction2(msg) {
//     // parameter--> input
//     console.log(msg);
// }
// myFunction2("this is messege̥");

// function -> sum of 2

// function sum(x, y) {
//     console.log(x + y);
// }

// sum(2, 3);

// function sum(x, y) {
//      s = x + y;
//      console.log("before return");
//      return s;
//      console.log("after return");
//  }

//  let val = sum(2, 3)
//  console.log(val);

//  arrow function

// const arrowSum = (a, b) => {
//     console.log(a + b);
// };
// arrowSum(3, 5);

// multiplication function
// function mul(a, b) {
//     return a * b;
// }

// const mul = (a, b) => {
//     return a * b;
// }

// let val = mul(5, 2);
// console.log(val);

//Q1
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//    return count;
// }

// console.log(countVowels("hello"));


const countVowels = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

let result = countVowels("ayan");
console.log(result);

