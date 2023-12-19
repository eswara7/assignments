/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// function sleep (seconds) {
//     const start = Date.now();
//   while(Date.now()-start<seconds){
//         console.log("busy")
//     }

// }
// sleep(3000);
// console.log("busy wait done")
// function sleep(milliseconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve,milliseconds)
//     })
// }
// sleep(3000).then(()=>{console.log("done with waiting")}) 


//i understand when promise is there its a async function with some async logic if the code is success the then will recieve resolve else reject
//so promise is constructor and runs immediately we have to call it then(rsolve) or catch reject

function sleep(milliseconds){
    return new Promise(function(resolve){
        setTimeout(resolve,milliseconds)//resolve called right after millisecIf the setTimeout function completes successfully (after the specified milliseconds), it calls resolve. This fulfills the Promise.
    })
}
sleep(5000).then(()=>{console.log("sleep is over")})
// if then(log("sleep is over")) it prints it so i have to perform a funciton it runs after resolve 
//then() method is used to attach a callback that will be executed when the Promise is fulfilled.