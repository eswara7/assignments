// /*
//     Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
// */

// function wait(n) {
// }
// /*
//     Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
// */

// const ans = new Promise(function(resolve){
//     setTimeout(wait,4000)
//     resolve();
//   })
  
//   function wait(n) {
//     console.log(n+"seconds passed")
//     }
//   ans.then(console.log(ans+"succesful"))
function wait(n){
    return new Promise(function(resolve){
        setTimeout(()=>{
            console.log(n + "seconds has passed")
            resolve(n);
        },n*1000)
    })
}
let ans = wait(5);
ans.then(console.log(ans +"successfull"))