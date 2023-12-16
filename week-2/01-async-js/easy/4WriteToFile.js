const fs = require('fs');
function WriteFile(){
  let data="i am writing something inside promise";
  return new Promise(function(resolve){
    fs.writeFile('write.txt',data,function(err,data){
      
      console.log("inside a promise")
    })
    
  })

  
}
WriteFile().then(console.log("written successful"))