// node modules 


const axios = require('axios')

axios.get('http://localhost:3000/students')
.then(response => console.log(response))
.catch(err => console.log(err.status))

let student = {
    name : 'Alakanadha',
    age : 28
}

async function sending(){
    try{
        const response = await axios.post('http://localhost:3000/students',
            student
        )
        console.log(response.data)

        if(!response.ok){
            throw new Error('Error: Response Failed')
        }
    }
    catch(err){
        console.log('Err:', err.message);
    }
    finally{
        console.log('Happy Customer')
    }
}
sending();

axios.put('http://localhost:3000/courses/101',{
    title : 'Psychologist',
    instructor : 'Dr. Akshay'
})

.then(response => console.log(response.data))
.catch(error => console.log("Error:", error.message))
