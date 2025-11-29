let marks = [59, 91, 90 , 85, 99, 94, 22];

let highMarks = marks.filter((val) => {
    return val > 90;
})
console.log(highMarks);