// for(let i=1 ; i <=5; i++){
//     console.log("Number:", i)
// }

// for(let i=10; i >= 1; i--){
//     console.log("Decrement:", i)
// }

// let j = 1;
// while(j<=6){
//     console.log("While:", j)
//     j++
// }

// let k = 8;
// do {
//     console.log("Do While:", k)
//     k--
// }
// while(k >= 1)


// for(let e=1; e <=4; e++){
//     if(e === 3){
//         break
//     }
//     console.log("Break:", e)
// }


// for(let i=1; i<=5; i++){
//     if(i===4){
//         continue
//     }
//     console.log("Continue:", i)
// }


for(let i=1; i<=4; i++){
    console.log("Outer Loop:", i)

    for(let j=1; j<=3; j++ ){
        console.log("Inner Loop:", j)

        for(let k=1; k<=2; k++){
            console.log("Inner Inside Loop:", k)
        }
    }
    for(let n=1; n <=3; n++){
        console.log("Inner Loop 2:", n)
    }
}









