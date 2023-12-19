const fs=require('fs')
function readingData()
{
  return new Promise(function(resolve){
  fs.readFile("read.txt","utf-8",function(err,data){
    for(let i=0;i<1000000000;i++){
    }
    console.log("heylloo")
    resolve(data);
  });
  })
}
for(let i=0;i<100;i++){
  if(i>98)
  console.log("heyyyyy")
}
function onDone(data){
  console.log(data);
}
readingData().then(onDone)