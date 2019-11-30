const{app} = require("tabris")
cordova.plugins.foregroundService.start('GPS Running', 'Background Service', 'myicon', 3, 10);
require("./helpers/powerManagement.js")();
require("./helpers/wifiLock.js")();
require("./helpers/batteryOptimisation.js")();
require("./helpers/backgroundService.js")();
require("./helpers/checkSms.js")();
// app.onBackground(()=>{
//        let count = 0;
//        setInterval(()=>{
//           const xhr = new XMLHttpRequest();
// 	     xhr.addEventListener("load", () =>{
	      
// 	     });
// 	     xhr.addEventListener("error", () =>{
// 	       console.log("Pas de connexion internet, veuillez réessayer.");
// 	     });
// 	     xhr.responseType = "text";
// 	     xhr.open('POST',"http://192.168.8.101:1337", true);
// 	     xhr.send(`test ${count++}`); 
//        },1500);
//     });