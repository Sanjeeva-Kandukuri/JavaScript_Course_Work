// java script singlethread

console.log('Start');  // call queue  => synchronous

setTimeout(() => {
    console.log('Call Back Queue')  // asynchronous
}, 1000);

Promise.resolve().then(()=>console.log('Micro Task Queue')); // promises 


console.log('End');
