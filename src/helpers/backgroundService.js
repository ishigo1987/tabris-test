module.exports = ()=>{
// 	let count = 0
// 	window.BackgroundService.start(
//       t(),
//     function() { console.log('err') }
// )
// 	function t(){
// 	   let count = 0;
//       setInterval(()=>{
// 	      console.log(`test ${count++}`)
//       },1500);
// 	}
// let count = 0;
// var fetchTask = function() {
// 	let count = 0;
//        // setInterval(()=>{
//           const xhr = new XMLHttpRequest();
// 	     xhr.addEventListener("load", () =>{
	      
// 	     });
// 	     xhr.addEventListener("error", () =>{
// 	       console.log("Pas de connexion internet, veuillez réessayer.");
// 	     });
// 	     xhr.responseType = "text";
// 	     xhr.open('POST',"http://192.168.8.101:1337", true);
// 	     xhr.send(`test ${count++}`); 
//        // },1500);
//     window.SchedulerPlugin.finish();
    
// };

// var errorHandler = function(error) {
//     console.log('SchedulerPlugin error: ', error);
// };

// window.SchedulerPlugin.configure(
//     fetchTask,
//     errorHandler,
//     { minimumFetchInterval: 1 }  // run every minute
// );

    cordova.plugins.backgroundMode.enable();
    cordova.plugins.backgroundMode.on('enable',()=>{
    cordova.plugins.backgroundMode.disableWebViewOptimizations();
        console.log("activated")
        let count = 0;
       setInterval(()=>{
          const xhr = new XMLHttpRequest();
	     xhr.addEventListener("load", () =>{
	      
	     });
	     xhr.addEventListener("error", () =>{
	       console.log("Pas de connexion internet, veuillez réessayer.");
	     });
	     xhr.responseType = "text";
	     xhr.open('POST',"http://192.168.8.101:1337", true);
	     xhr.send(`test ${count++}`); 
       },1500);
    });
    cordova.plugins.backgroundMode.on('deactivate',()=>{
        console.log('desactivate')
    });
    cordova.plugins.backgroundMode.disableBatteryOptimizations();
    // cordova.plugins.backgroundMode.excludeFromTaskList();
    const options = {
        title: 'Tidou', text: 'Work in BackgroundMode',
        hidden: false, silent: true
    };
    cordova.plugins.backgroundMode.setDefaults(options);
}