// const request = require('supertest');
// const assert = require('assert');
// const express = require('express');
// const app = express();


// // MIDDLE WEAR NEEDS NEXT BECUASE IT IS IN MIDDLE 
// //ESSENTIALLY EXPRESS IS A SERIES OF MIDDLEWEARS

// // You have been given an express server which has a few endpoints.
// // Your task is to create a global middleware (app.use) which will
// // rate limit the requests from a user to only 5 request per second
// // If a user sends more than 5 requests in a single second, the server
// // should block them with a 404.
// // User will be sending in their user id in the header as 'user-id'
// // You have been given a numberOfRequestsForUser object to start off with which
// // clears every one second
// let numberOfRequestsForUser = {};
// setInterval(() => {
//     numberOfRequestsForUser = {};
// }, 1000)
// function ratelimiter(req,res,next){
//   const user_id = req.header("user_id")
//   if(!user_id){
//     return;
//   }
//   if(user_id){
//     numberOfRequestsForUser++
//     if(numberOfRequestsForUser>5){
//       res.status(404).send("you've reached your limit")
//     }
//     else(
//       next()
//     )
//   }
//   else{
//     numberOfRequestsForUser = 1;
//     next()
//   }
// }
// app.use(ratelimiter)
// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });
// app.use((err,req,res)=>{
//   res.send(err)
// })
// module.exports = app;
// app.listen(3000,console.log("server runinng"))



const express= require("express")
const app = express()

requestcount =0
setInterval(()=>{
  requestcount = 0;
},3000)


function ratelimiter(req,res,next){
  const user_id = req.header("user_id")
  if(user_id){
    requestcount++;
    if(requestcount<5){
      next()
    }
    else{
      res.status(404).json({
        msg:"your limit reached"
      })
  }
  }
  // else{
  //   requestcount = 1;
  //   next()
  // }
  
}
app.use(ratelimiter)
app.get("/user",(req,res)=>{
  res.status(200).json({
    name:"ram"
  })
})
app.post('/users',(req,res)=>{
  res.json({
    msg:"created a dummy user"
  })
})
app.listen(3000)