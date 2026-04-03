// we use this topic in react 

// props i react

// obect destructuring 



let student = {
    name: 'Dhanya',
    age:23,
    skills:'Python full Stack',
    details:{
        package: '12 LPA',
        company: 'Sia Groups'
    }
}

console.log(student.name);
console.log(student.details.company);


let {age, skills} = student;
console.log(age);
console.log(skills);

let {details:{package,company}} = student;
console.log(package);
console.log(company);



// Rest parameter   => to pass the multiple arguments to a single parameter

function adding(...age){
    console.log(`Guess My Age ${age}`)
}

adding(22,23,24,25,26)


function greet(name, ...result){
    console.log(`${name} what is my result ${result}`)
}

greet("Dhanya",90,80,70);


// spread operator

let arr_1 = [1,2,3,4,5,5,3,4]
let arr_2 = [6,7,8,9,10,9,6,8]
console.log([...arr_1, ...arr_2]);                 // + (arr_1 + arr_2), (...arr_1, ...arr_2),([...arr_1, ...arr_2])
console.log([... new Set([...arr_1, ...arr_2])]);            // (new Set([...arr_1, ...arr_2]));

console.log({...student,place:'Guntur'});                              // (student,{place:'Guntur'});