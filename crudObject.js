let student = {
    name : "Dhanya",
    age : 25,
    skills : "Python Full Stack",
    details : {
        salary : '12 LPA',
        company : 'Sai groups'
    },
    savings : [{
        monthly : '50k'
    }]
}

console.log(student);
console.log(student.skills);
console.log(student.details.salary);
console.log(student.savings[0].monthly);


student.age = 27;
console.log(student);
student.details.salary = '15 LPA';
console.log(student);
student.savings[0].monthly = '65k';
console.log(student);


delete student.skills;
console.log(student);


delete student.details.company;
console.log(student);


let updatedStudent = [{
    name : "Jyothi",
    age : 23,
    place : "Guntur",
    company : "Sai groups",
    greet : function(){
        console.log("Hello", this.name)       // this or object we can use both 
    }

}]

function outerFunction () {
    console.log('I am From', this.place)
}

console.log(updatedStudent);
updatedStudent[0].greet();
outerFunction.call(updatedStudent[0]);
outerFunction.apply(updatedStudent[0]);
let value = outerFunction.bind(updatedStudent[0]);       // apply = add, call = calling         bind= upadated student values perform

value();                                                  // dot. notation is common except create


console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));   // changing ibject to array of each and individual array's

console.log('age' in student);




