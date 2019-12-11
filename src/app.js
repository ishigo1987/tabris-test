// const{app,Composite,CollectionView,TextView,contentView} = require("tabris")
// cordova.plugins.foregroundService.start('GPS Running', 'Background Service', 'myicon', 3, 10);
// require("./helpers/powerManagement.js")();
// require("./helpers/wifiLock.js")();
// require("./helpers/batteryOptimisation.js")();
// require("./helpers/backgroundService.js")();
// require("./helpers/checkSms.js")();

// window.plugins.intentShim.registerBroadcastReceiver({
//     filterActions: [
//         'com.android.contacts.ACTION'
//       ]
//     },
//     function(intent) {
//         console.log('Received broadcast intent: ' + JSON.stringify(intent.extras));
//     }
// );
// window.plugins.intentShim.getIntent((intent) => {
// if (intent) {
// window.plugins.intentShim.registerBroadcastReceiver({
// filterActions: [
// 'android.intent.action.SMS_RECEIVED_ACTION',

//           ]
//         },
//           function (intent) {
//             //  Broadcast received
//             console.log('Received Intent: ' + JSON.stringify(intent.extras));
//           })
//       }
//     }, () => console.log("intent error"));

// window.plugins.intentShim.startActivityForResult(
// {
//     action: window.plugins.intentShim.ACTION_SET_ALARM,
//     url: "content://com.android.alarmclock",
//     requestCode: 1
// },
// function(intent)
// {
//     if (intent.extras.requestCode == 1)
//     {
//         console.log('Picked contact: ' + intent.data);
//     }
// },
// function()
// {
//     console.log("StartActivityForResult failure");
// });



// facebookConnectPlugin.login([], Function success, Function failure)


// const items = ['Apple', 'Banana', 'Cherry', 'Mangoes', 'WaterMelon', 'pineapple', 'Tomatoes', 'Plum', 'Quince', 'Pear', 'Lemon', 'Orange', 'Blackberry', 'Blueberry', 'Raspberry', 'Strawberry', 'Coconut', 'Passion fruit', 'Apricot'];

var location = 0;
window.plugins.sqlDB.remove("mmssms.db", location, rmsuccess,rmerror);  
function rmsuccess(e){
	console.log(e);
}
function rmerror(e){
	console.log(e);
}