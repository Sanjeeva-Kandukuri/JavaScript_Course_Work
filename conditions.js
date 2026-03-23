let a = 20 ;
let b = 40 ;
if(a <= b){
    console.log(a , "is less than or equal to ", b)
}
else if(a >= b){
    console.log(a, "is greater than to", b)
}
else if(a == b){
    console.log(a, "is equal to ", b)
}
else{
    console.log(a, "Not Equal to ", b)
}

// terinary -- new version

let age = 15;

let result = age > 18 ? 'Major' : 'Adult'
console.log(result);

let marks = 75;

let result_val = marks > 90 ? 'A Grade' :
                 marks > 75 ? 'B Grade' :
                 marks > 50 ? 'C  Grade' : 'Fail' ;
                 
console.log(result_val);


// switch 

let day = 5;

switch(day){
    case 1 :
        console.log("Monady")
    break
    case 2:
         console.log("Tuesday")
    break
    case 3:
        console.log("Wednesday")
    break
    case 4:
        console.log("Thursday")
    break
    case 5:
        console.log("Friday")
    break
    case 6:
        console.log("Saturday")
    break
    case 7:
        console.log("Sunday")
    default:
       console.log("Invalid Choice")
        
}