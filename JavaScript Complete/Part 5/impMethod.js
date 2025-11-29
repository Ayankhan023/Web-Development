// MAPS
let nums = [3, 4, 55, 34, 56];
nums.map((val) => {
  console.log(val);
});

// FILter

// let num = [3, 46, 53, 14, 65];

// let EvenNum = num.filter((val) => {
//     return val % 2 === 0;
// })

// console.log(EvenNum);

// REDUCE
let num = [1, 2, 3, 4];

const output = num.reduce((res, curr) => {
    return res + curr;
});

console.log(output);
let num_ = [1, 2, 3, 4];

const outputs = num_.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(outputs);
