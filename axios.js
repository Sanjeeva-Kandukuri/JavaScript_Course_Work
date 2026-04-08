// node modules 


const axios = required('axios')

axios.get('http://localhost:8001/students')
.then(response => console.log(response))
.catch(err => console.log(err.status))

let student = {
    name : 'Rahul',
    age : 22
}

axios.post('http://localhost:8001/students')