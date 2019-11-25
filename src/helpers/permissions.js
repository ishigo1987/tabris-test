module.exports = ()=>{
  return new Promise((resolve)=>{
 //  	 const permissions = cordova.plugins.permissions;
 //     	   permissions.requestPermission(permissions.READ_CONTACTS, success, error);
 
	// function error() {
	//   console.log('user refuse to get contact access');
	// }
 
	// function success( status ) {
	//   if(status.hasPermission === true){
 //        resolve({Message:"Permission granted"});
	//   }else{
	//   	error();
	//   }
	// }
	const {permission} = require('tabris');
	if (permission.isAuthorized('contacts')) {
      resolve({Message:"Permission granted"})
} else {
    permission.requestAuthorization('contacts').then((responseStatus)=>{
    	resolve({Message:"Permission granted"})
    })
    
  
}
  });
};