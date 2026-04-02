let text = "Hello Welcome To JavaScript" ;
let pattern = /welcome/i;                               // i => it removes the case sensitive  'removes uppercases'
console.log(pattern.test(text));


let value = "cat cat cat" ;
let result = value.replace(/cat/g, 'dog');            // g global
console.log(result)

let match = value.match(/at/g);
console.log(match);


let value_2 = "Dog Dog dog";
let replace_res = value_2.replace(/dog/gi,"Monkey");
console.log(replace_res);


let age = "My age is 22 changed to 25 " ;
let age_res = /\d/;
console.log(age_res.test(age));
console.log(age.match(/\d+/g));
console.log(age.match(/\w+/g));

// without using back slash 

let regExp = new RegExp("Hello Morning")
console.log(regExp);

let email = 'dhanya12@gmail.com'
let email_RegExp = /^[a-z 0-9]+@gmail+\.(com|in)$/;      // instead gmail we can use [a-z]   i 2 minimum characatrs 2,3 min and maxi
console.log(email_RegExp.test(email))



let password = 'Dhanya@123' ;
let password_Exp = /^[A-Z][a-z]+[!@#$%^&*]\d{2,3}$/;
console.log(password_Exp.test(password));


// let name = /^[A-Z][a-z]+$/
