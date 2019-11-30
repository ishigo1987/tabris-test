module.exports = ()=>{
      CordovaSMS.setDefault(null, null, "ishigo1987.tabristest");
     //User will be prompt by Android system dialog to change the SMS app, the yes|no button click can be listen trough
     CordovaSMS.onDefaultSelected((result)=>{
         console.log(result)
         //result value will be true if user hits Yes button, else it will result to false.
     });
};