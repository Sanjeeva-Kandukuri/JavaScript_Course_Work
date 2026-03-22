// Premitive Datatypes
// String Datatype

let str_value = "example@12gmail.com";
console.log(typeof(str_value));

// Number Datatype

let num = 20;
console.log(typeof(num));

let num_decimal =55.5;
console.log(typeof(num_decimal));

// Boolean Datatype 

let bool = true ;
console.log(typeof(bool));

// Bigint Datatype

let a = 10n
let b =20n
console.log(a+b)
console.log(typeof(a))

// Symbol

let symbol = Symbol("id")
let symbol_1 = Symbol("id")
console.log(symbol === symbol_1)
console.log(typeof(symbol));

// Converting one data type to another

let val_1 = 20;
let str = String(val_1)
console.log(typeof(str));

let val_2 = "true";
let boolean = Boolean(val_2)
console.log(typeof(boolean));

let val_3 = "35";
let number = Number(val_3)
console.log(typeof(number))

let val_4 = true;
let string = String(val_4)
console.log(typeof(string))

let big_num = BigInt(9392039661);
console.log(typeof(big_num));

let val = 225n ;
console.log(big_num + val)


console.log(typeof(symbol_1))



// Non-Premitive Datatypes

// Array Datatype

let arr =new Array (10,20,30,40,50)
console.log(arr)                       // 50 is sorted
console.log(typeof(arr));

let array = [10,20,30,40,50]
console.log(array)                   
console.log(typeof(array))           // type of array is array but showed as object 


let array_2= ['Apple','Banana','pear','Guava'];
console.log(array_2)
console.log(typeof(array_2))

// Object Datatype

let students = {
    name : "Sanjeev",
    age : 20,
    skills : 'Python Full Stack'
}
console.log(students)

// Type conversion in java script happens automatically

let product = 12 * "6";
console.log(product)

let division = 28 / 7;
console.log(division)
 
let sum = 6 + "6" ;  //It acts as a concantination (adding one data type to another)
console.log(sum); //66

let sum_5 = 6 + "6" + "Not Adding" ;
console.log(typeof(sum_5))

//Type conversions --m user manually conerted 

let result = 12 *12 ;
console.log(result);




console.log(true === false);
console.log(false === false);


let float = 2.5 + 5;
console.log(float)
