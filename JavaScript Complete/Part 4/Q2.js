let items = [250, 645, 300, 900, 50];
let i = 0;

// for (val of items) {
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] -= offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

for (i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
 
}
 console.log(items);

