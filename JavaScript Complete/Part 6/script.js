let heading = document.getElementById("heading"); //h1
console.dir(heading);

let headings = document.getElementsByClassName("headings");
console.dir(headings);

let paragh = document.getElementsByTagName("p");
console.dir(paragh);

let firstElements = document.querySelector("p");
console.dir(firstElements); // for first element (select)

let allEl = document.querySelectorAll("p"); // for paragraph tag
console.dir(allEl);

let forClass = document.querySelectorAll(".headings"); // for class
console.dir(forClass);

let forId = document.querySelectorAll("#heading"); // for id
console.dir(forId);

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College students";

let divs = document.querySelectorAll(".box");
let idx = 1;

for (div of divs) {
    div.innerText = `new unique value ${idx}`
    idx++;
    
}

// Another way
// divs[0].innerText = "This is first div change by JS";
// divs[1].innerText = "This is Second div change by JS";
// divs[2].innerText = "This is third div change by JS";
