// synchronous 

console.log('First');
console.log('Second');
console.log('Third');    
console.log('Fourth');
console.log('Fifth');


// asynchronous functions


console.log('One');
console.log('Two');
setTimeout(()=>{              
    console.log('Three')
}, 1000);                      
console.log('Four');
console.log('Five');


// set tags


setTimeout(()=>{
    console.log('Delayed Functionalitiy')
},3000)


// set interval

let timer = setInterval(()=>{
    let date = new Date();
    console.log(date.toLocaleTimeString())
},1000)

setTimeout(()=>{
    clearInterval(timer);
    console.log('Timer Stopped');

}, 20000);
