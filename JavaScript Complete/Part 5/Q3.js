let n = prompt("enter the input number :");

let arr = [];

for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);

let totalSum = arr.reduce((prev, curr) => {
    return prev + curr;
    
})
console.log(totalSum);
let totalProd = arr.reduce((prev, curr) => {
    return prev * curr;
    
})
console.log(totalProd);