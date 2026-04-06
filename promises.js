// pending status
// resolve status => .then
// reject status  => .catch

// important


function payment(){
    return new Promise((resolve, reject) =>{

        let status = false;


        if(status){
            resolve('Resovled Successfully')
        }
        else{
            reject('Rejected Error')
        }

    })
}

payment()
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))