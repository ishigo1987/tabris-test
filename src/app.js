const{app,Composite,CollectionView,TextView,contentView, TextInput, Button} = require("tabris");
app.idleTimeoutEnabled = false;
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
// 'android.intent.action.SIM_STATE_CHANGED',

//           ]
//         },
//           function (intent) {
//             //  Broadcast received
//             console.log('Received Intent: ' + JSON.stringify(intent.extras));
//           })
//       }
//     }, () => console.log("intent error"));


        // window.plugins.intentShim.startActivityForResult(
        //     {
        //         action: "android.provider.Telephony.ACTION_CHANGE_DEFAULT",
        //         extras: { EXTRA_PACKAGE_NAME: 'ishigo1987.tabristest'}
        //     },
        //     function(intent)
        //     {
        //        console.log(intent)
        //     },
        //     function(error)
        //     {
        //         console.log(error)
        //     }
        // );
        // const {contentView, TextView, Composite, ScrollView} = require("tabris");
        // const now = require("performance-now")
        // const fast = require("fast.js")
        // const scrollView = new ScrollView({layoutData:"stretch"}).appendTo(contentView)
        // const arrData = [];
        // for (let i = 0; i < 200; i++) {
        //     arrData.push(i);
        // }
       
        //    const start = now()
        

        // // arrData.forEach(()=>{
        // //     new Composite({left:0, top:["prev()",0], right:0,height:30, background:"#eee"}).append(
        // //         new TextView({centerY:0, left:15, text:"test de performances"})
        // //     ).appendTo(scrollView)
        // // })
        
        // for(let i = 0; i < 200; i++){
        //     new Composite({left:0, top:["prev()",0], right:0,height:30, background:"#eee"}).append(
        //         new TextView({centerY:0, left:15, text:"test de performances"})
        //     ).appendTo(scrollView)
        // }

        // const end = now()

        // console.log(end - start)
        // const { permission, ImageView, contentView, CameraView, device } = require('tabris');
        //     if (permission.isAuthorized("camera")) {
                
        //     } else {
        //         permission.requestAuthorization("camera").then((responseStatus) => {
                    
        //         });
        //     }
        //     const options = {flash: "on"};
        //     const camera = device.cameras[0];
        //     camera.active = true
        //     new CameraView({ layoutData: "stretch", camera: camera, scaleMode: "fill", id: "cameraView" })
        //     .onTap(()=>{
        //         camera.captureImage(options).then((picture) => {
        //             console.log(picture)
        //         })
        //     }).appendTo(contentView);
            
        
        // const arrayOfPictures = []
        // galleryAPI.getAlbums(function(items)
        // {
        //    console.log(items)
        //   // items.forEach((item)=>{
        //   //   galleryAPI.getMedia({title:item.title}, function(items)
        //   //    {
        //   //       console.log(items)

        //   //   }, function(error){
        //   //       console.log(error);
        //   //   });
        //   // })
          

        // }, function(error){
        // //     console.log(error);
        // });
        
// import * as cordovaGallery from 'cordova-gallery-access';
// const cordovaGallery = require('cordova-gallery-access');
// console.log(cordovaGallery)
// cordovaGallery.load().then(items => {
//     console.log(items)
// }).catch(e => console.error(e));

// Photos.photos( 
//     function(photos) {
//         photos.forEach((photo)=>{
//             // Photos.image(photo.id,
//             //     function(data) {
//             //         console.log(data)
//             //     },
//             //     function(error) {
//             //         console.error("Error: " + error);
//             //     });
//         })
//     },
//     function(error) {
//         console.error("Error: " + error);
//     });

// var photo = {"id": "19026", "contentType": "image/jpeg"}
// Photos.image(photo.id,
//     function(data) {
//        console.log(data)
//     },
//     function(error) {
//         console.error("Error: " + error);
//     });

// function success(data){
//     console.log(data)
// }
// function error(err){
//     console.log(err)
// }
// window.plugins.DocumentContract.getContract({
//     uri: 'content://com.foo.bar/xyz',  // content URI (required)
//     columns: ['_display_name']         // projection of columns (optional)           // Array => false, Object => true (default false)
//   },
//   success,                             // success callback
//   error);
// new Button({centerY:0, left:15, right:15, height:75, background:"red", text:"Click me"})
// .onTap(()=>{
//     new Composite({top:["prev()",20], left:10, right:10})
//     .append(
//         new TextInput({left: ["prev()", 0], centerY: 0, right: 5, style: 'none', floatMessage: false, message:"This is a test"})
//     ).appendTo(contentView)
// }).appendTo(contentView);
    // const{Composite, TextInput, TextView, contentView} = require("tabris")
    // const headerComposite = new Composite({ top: 0, left: 0, right: 0, height: 57}).appendTo(contentView);
    // const headerViewTitle = new TextView({ centerY: 0, left: ['prev()', 5], right: 30, textColor: "gray", text: "Test", font: 'bold 17px' }).appendTo(headerComposite);
    // const searchCountry = new TextView({ centerY: 0, right: 15, textColor:"gray", text:"create input"})
    // .onTap(({ target }) => {
    //     target.dispose()
    //     new TextInput({ width:200, centerY: 0, right: 5, message: "This is a test", style: 'none', floatMessage: false,  background: 'transparent', focused: true}).appendTo(headerComposite);
    // }).appendTo(headerComposite);


    // setTimeout(()=>{
    //     headerComposite.dispose();
    // },15000);

      // The callback that executes after a Media object has completed the current play, record, or stop
        // function mediaSuccess(success){
        //     console.log(`The success is ${success}`)
        // }

        // // The callback that executes if an error occurs. It takes an integer error code
        // function mediaError(error, message){
        //     console.log(`The error is ${JSON.stringify(error)}`)
        //     console.log(message)
        // }

        // // The callback that executes to indicate status changes. It takes a integer status code. (Function)
        
        // function mediaStatus(status){
        //     console.log(status)
        // }
        const audio = "https://www.s3-us-west-2.amazonaws.com/series-stream/Fruitful+Repentance/CD+1+-++Fruitful+Repentance.mp3";
