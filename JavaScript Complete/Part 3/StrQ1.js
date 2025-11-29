let User = prompt("Enter the Full Name");

let userLength = User.length;

let Username = "@" + User.concat(userLength);

console.log(Username)