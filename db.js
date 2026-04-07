// get method

let  student = {
    name : "Sanjeeva",
    id : '4',
    age : '25'
}



fetch('http://localhost:3000/students')
.then(rseponse => rseponse.json())
.then(data => console.log(data))
.catch(err => console.log(err));


fetch('http://localhost:3000/students/2',{
    method : 'PUT',
    headers : {
        'Content-Type' : 'apllication/json'
    },
    body : JSON.stringify(student)
})

.then(rseponse => rseponse.json())
.then(data => console.log(data))
.catch(err => console.log(err));



fetch(('http://localhost:3000/students/3',{
    method : 'DELETE'

})

.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))


fetch('http://localhost:3000/students/courses',{
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(course)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))