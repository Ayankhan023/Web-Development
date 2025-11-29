// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let _name = document.querySelector("div");
// console.log(_name);

// let nme = _name.getAttribute("name");
// console.log(nme);

// let para = document.querySelector("p");
// para.setAttribute("class", "newClass"); // use set for change
// console.log(para.getAttribute("class")); // use get for access

// let div_ = document.querySelector("div");
// div_.style.backgroundColor = "green";
// div_.style.backgroundColor = "purple";
// // div_.style.visibility = "hidden";
// div_.style.fontSize = "24px";
// div_.innerText = "hello";


// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// // div.append(newBtn); // use to add last in div (inside)
// // div.prepend(newBtn); // use to add starting in div (inside)
// // div.before(newBtn); // use to add before  in div (outside)
// div.after(newBtn); // use to add after in div (outside)

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>hi, I am New!</i>";
// document.querySelector("body").prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();



// Question 1:

// let newBt = document.createElement("button");
// newBt.innerText = "Click me";
// document.querySelector("body").prepend(newBt);
// newBt.style.backgroundColor = "red";
// newBt.style.color = "white";

// Question 2:

let para = document.querySelector("p");
para.getAttribute("class");
// para.setAttribute("class", "newClass");

// para.append("newClass");
para.classList.add("newClass");



