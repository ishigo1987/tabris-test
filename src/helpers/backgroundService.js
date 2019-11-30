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
let count = 0;
cordova.plugins.jobScheduler.schedule({
   minimumLatency: 10, // seconds
   overrideDeadline: 10, //seconds
   callback: function() { 
     
     console.log(`test ${count++}`)
   } // what to do when the job is fired
 });
}