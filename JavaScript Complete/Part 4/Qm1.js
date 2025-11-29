let companies = ["Bloomberg", "Microsoft", "Uber", "Google","IBM", "Netflix"];
companies.shift(); // solution of (a) part in which we use shift to remove starting string in array 
console.log(companies);
companies.splice(1, 1 , "Ola"); // solution of (b) part in which we replace uber with ola using splice
console.log(companies);
companies.push("Amazon"); // solution of (c) part in which we use push to add a new word in end
console.log(companies);