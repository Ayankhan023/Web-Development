// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 is clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// };
let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);


};

// let box= document.querySelector("div");
// box.onmouseover = () => {
//     console.log("you are inside div");
// }

// btn1.addEventListener("click", (evt) =>{
//     console.log("Button1 was clicked");
//      console.log(evt);
//     console.log(evt.type);



// });


// btn1.addEventListener("click", (evt) =>{
//     console.log("Button1 was clicked - handler1");
// });
// btn1.addEventListener("click", (evt) =>{
//     console.log("Button1 was clicked - handler2");
// });
// const handler3 = (evt) =>{
//     console.log("Button1 was clicked - handler3");
// };
// btn1.addEventListener("click", handler3);
// btn1.addEventListener("click", (evt) =>{
//     console.log("Button1 was clicked - handler4");
// });

// btn1.removeEventListener("click", handler3);

// Question 1:

let modeBtn = document.querySelector("#mode");
let curMode = "light";

modeBtn.addEventListener("click", () => {
    if (curMode === "light") {
        curMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    } else {
        curMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(curMode);
    
});
