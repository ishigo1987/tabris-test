module.exports = ()=>{
      CordovaSMS.checkDefault((result)=>{
          console.log(JSON.parse(result).currentDefault);
      },(err)=>{
         console.log(err)
      });
};