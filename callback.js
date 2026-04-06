// callback neccesity  => very important
// call back

// Higher order function in the java script

function placeOrder(order,payment){
    console.log(`${order} Order Placed`)

    setTimeout(() =>{
        console.log("Payment Successful");
        payment();
        //delivered();
    }, 3000)
    
}

function delivered(){
    console.log('Ordered Delivered')
}

placeOrder("Biryani", delivered);



function calculation(a, b, call){
    call(a, b)

}

function add(x, y){
    console.log(x + y);
    
}

function subtract(i, j){
    console.log(i-j)
    
}

function division(e, f){
    console.log(e/ f)
    
}

calculation(20, 40, add);
calculation(20, 50, subtract);
calculation(12, 6, division);




// function payment(){
//     console.log("Payment Successful")
// }

// payment();