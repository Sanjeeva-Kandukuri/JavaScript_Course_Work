// API Creation   => use json server

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))


let user = {
    id :11,
    name : 'Jyothi',
    username: 'jyothi@12',
    email :'jyothi@gmail.com'
}

fetch('https://jsonplaceholder.typicode.com/users',{
    method : 'POST',
    headers : {
        'Content-Type': 'application.json'
    },
    body: JSON.stringify(user)
})

.then(response => response.json())
.then(data => console.log(data))    
.catch(err => console.log(err.message))    