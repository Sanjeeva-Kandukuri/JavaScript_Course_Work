
// cretae 

// array crud operation

let fruits = ['Apple','Banana','Pear','Orange'];
console.log(fruits);
console.log(fruits[1]);


fruits.push("Musk Melon");      
console.log(fruits);

fruits.pop("Mango");      
console.log(fruits);

fruits.shift("Mango");  
console.log(fruits);

fruits.shift("Mango");    
console.log(fruits);

fruits.unshift("Mango");   
console.log(fruits);



// fruits.splice(1, 2);
// console.log(fruits);

fruits.splice(1,2);        
console.log(fruits);


fruits.splice(1, 0, 'water Melon');  
console.log(fruits);


let result = fruits.slice(1, 3);   
console.log(result)


// for..of loop

for(let value of fruits){
    console.log(value)
}

for(let index in fruits){
    console.log(index, ':',fruits[index])
}
