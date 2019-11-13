module.exports = ()=>{
  return new Promise((resolve)=>{
     permissions.requestPermission(permissions.READ_CONTACTS, success, error);
 
	function error() {
	  console.log('user refuse to get contact access');
	}
 
	function success( status ) {
	  if(status.hasPermission === true){
        resolve({Message:"Permission granted"});
	  }else{
	  	error();
	  }
	}
  });
};