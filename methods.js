// products, it takes every product calls to the map()

// map() iterate  over the array and returns the new array,ex:- search whatsapp

let array = [10,12,20,25,15] ;

let result = array.map(value =>(
    value * 2
));

console.log(result);

// filter() method,

let arr_2 = [5,10,16,12,6]

let res_value  = arr_2.filter(value =>(
    value >= 10
)) 

console.log(res_value)

// find(),    it shows output only first value based on the condition what we written.,ex:- awe can search specific person name

let find_value = arr_2.find(value =>(
    value >= 10

));

console.log(find_value)

// reduce()

let value = [100,200,300,400,500]

let reduce_res = value.reduce((accumulator, currentval)=>(
    accumulator + currentval
),14);
console.log(reduce_res)


// for each loop()

let fruits = ['Apple','Banana','Pear','Grapes'];

fruits.forEach(e =>(                   //directly we can use let fruits_res = fruits.forEach
    console.log(e)
))