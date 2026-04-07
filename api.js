// API Creation   => use json server

// most  important

// what is https methods 1.get 2.post 3.put(update) 4.delete

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

fetch('https://jsonplaceholder.typicode.com/users/',{
    method : 'POST',
    headers : {
        'Content-Type': 'application.json'
    },
    body: JSON.stringify(user)
})


.then(response => response.json())
.then(data => console.log(data))    
.catch(err => console.log(err.message))    


let updateUser = {
    name : 'Ajay',
    username : 'Satish CR',
    email : 'lakshmireddy@gmail.com'
}



fetch('https://jsonplaceholder.typicode.com/users/5',{   // we need to use id is mandatory
    method : 'PUT',
    headers : {
        'Content-Type': 'application/json'
    },
    body : JSON.stringify(updateUser)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error.status)); 



fetch('https://jsonplaceholder.typicode.com/users/3',{   // we need to use id is mandatory // fetch it's aleready  has promise
    method : 'DELETE',
     
})

.then(response => console.log('Deleted Successfully'))