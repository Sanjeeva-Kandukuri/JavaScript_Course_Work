
// cretae 

// array crud operation

let fruits = ['Apple','Banana','Pear','Orange'];
console.log(fruits);
console.log(fruits[1]);


fruits.push("Musk Melon");      // array methods , push, pop, shift, unshift
console.log(fruits);

fruits.pop("Mango");      // last element remove
console.log(fruits);

fruits.shift("Mango");     // first element add
console.log(fruits);

fruits.shift("Mango");     // first element remove
console.log(fruits);

fruits.unshift("Mango");   // last element add
console.log(fruits);



// fruits.splice(1, 2);
// console.log(fruits);

fruits.splice(1,2);        // del elements
console.log(fruits);


fruits.splice(1, 0, 'water Melon');  // add
console.log(fruits);


let result = fruits.slice(1, 3);   // read
console.log(result)


// for..of loop

for(let value of fruits){
    console.log(value)
}

for(let index in fruits){
    console.log(index, ':',fruits[index])
}
