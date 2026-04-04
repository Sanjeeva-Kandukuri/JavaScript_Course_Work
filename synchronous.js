// synchronous , definition: if any occurs in program it will effect to the entire program

console.log('First');
console.log('Second');
console.log('Third');    //lo.('Third)
console.log('Fourth');
console.log('Fifth');


// asynchronous functions


console.log('One');
console.log('Two');
setTimeout(()=>{              // ananymous function ()
    console.log('Three')
}, 1000);                      // 1sec
console.log('Four');
console.log('Five');


// what is the difference between synchronous and asynchronous function ?


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
