// String operations

let value = " Python Full Stack "
console.log(value.toLowerCase());
console.log(value.toUpperCase());
console.log(value.trimEnd());      
// console.log(value.trim());
console.log(value.replace('Python', 'Java'));
console.log(value.indexOf('Stack'));
console.log(value.length);
console.log(value.slice(0, 8));
console.log(value.split(" "));
let split = value.split(" ")
console.log(split.join("*"));
console.log(split.includes('Python'));
console.log(value.substring(4, 9));
console.log(value.repeat(5));

let greet = 'Hi';


 let palindrome =  'madam';                                  
 let result = palindrome.split("").reverse().join("");
console.log(result);


if(palindrome === result){
    console.log(result, "is palindrome")
}
else{
    console.log(result, "is Not palindrome")
}




let num = 4;
console.log(Math.floor(num));

let num_1 = 5.4;
console.log(Math.ceil(num_1));


let num_2 = 1.6;
console.log(Math.round(num_2));

let power = 4
console.log(Math.pow(power, 3));

let sqrt = 25;
console.log(Math.sqrt(sqrt))


let random = Math.floor(Math.random()*10 + 1);
console.log(random);


// Date Objects();

let date = new Date
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth() +1)    
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())


console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());



