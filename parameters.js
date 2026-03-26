function sum(a=15, b=25){       // default parameters
    console.log(a - b)
    console.log(a + b)
}

sum(12)      // NaN is the number data type , function declaration is called parameter and function calling is called arguments ==>other wise undefined



function add(x, y){
    return x * y
    console.log(x + y); 
}

console.log(add(6, 12));

// arrow functions

const greeting = () => {
    console.log("Arrow Function")

}
greeting()


const sum_val = x => x * x;           // single parameter
console.log(sum_val(10)) 

const parm_val = (x, y) => {          // multiple parameter
    return (x/y);

}                                      // ES 6 module introduced 2015
console.log(parm_val(15, 5));





