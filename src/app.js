// const{Composite,TextView,contentView, TextInput, Button, statusBar, navigationBar} = require("tabris");
// app.idleTimeoutEnabled = false;
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

    // const headerComposite = new Composite({ top: 0, left: 0, right: 0, height: 57}).appendTo(contentView);
    // const headerViewTitle = new TextView({ centerY: 0, left: ['prev()', 5], right: 30, textColor: "gray", text: "Test", font: 'bold 17px' }).appendTo(headerComposite);
    // const searchCountry = new TextView({ centerY: 0, right: 15, textColor:"gray", text:"create input"})
    // .onTap(({ target }) => {
    //     target.dispose()
    //     new TextInput({ width:200, centerY: 0, right: 5, message: "This is a test", style: 'none', floatMessage: false,  background: 'transparent', focused: true}).appendTo(headerComposite);
    // }).appendTo(headerComposite);


    // setTimeout(()=>{
    //     headerComposite.dispose();
    // },5000);

const {TextInput, CollectionView, contentView, TextView, Composite} = require("tabris");

// const j = 1000;
// const arr = [];
// for(let i=0; i<j; i++){
//   arr.push("this is text " + i);
// };

// new TextInput({left:0, right:0, height:50, message:"just for the test", keepFocus:true}).appendTo(contentView);

// new CollectionView({top:['prev()',0], left:0, right:0, bottom: 0, scrollbarVisible:true, columnCount:1, itemCount:arr.length, cellHeight:30,
//    createCell:()=>{
//       const cell = new Composite({left:0, right:0, height:30,})
//       new TextView({centerY:0, left:0, right:0, textColor:"#212121",font:"18px", id:'textToDisplay'}).appendTo(cell);
//       new Composite({ bottom: 0, left: 0, right: 0, height: 1, background: "#eeeeee" }).appendTo(cell);
      
//       return cell;
   
//    },updateCell:(cell, index)=>{
//       cell.find("#textToDisplay").only().text = arr[index];
//    }
// }).appendTo(contentView)



const{AlertDialog} = require('tabris');
    new AlertDialog({
      title:'Test',
      message:'Hello how are you ?',
      buttons: {
        ok:'Fine',
        cancel:'Not fine'
      }
    }).on({
      closeOk: (e) => {
    
      },
      closeCancel: () => {
    
      },
      close:()=>{
    
      }
    }).open();