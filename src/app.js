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
        const { permission, ImageView, contentView } = require('tabris');
            if (permission.isAuthorized("android.permission.READ_EXTERNAL_STORAGE")) {
                
            } else {
                permission.requestAuthorization("android.permission.READ_EXTERNAL_STORAGE").then((responseStatus) => {
                    
                });
            }
            cordova.plugins.photoLibrary.getLibrary(
  function (result) {
    var library = result.library;
    // Here we have the library as array
    console.log(library)
    // new ImageView({left:0, right:0, image:{src: library[0].photoURL}}).appendTo(contentView)

    // library.forEach(function(libraryItem) {
    //   // console.log(libraryItem.id);          // ID of the photo
    //   console.log(libraryItem.photoURL);    // Cross-platform access to photo
    //   console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
    //   // console.log(libraryItem.fileName);
    //   // console.log(libraryItem.width);
    //   // console.log(libraryItem.height);
    //   // console.log(libraryItem.creationDate);
    //   // console.log(libraryItem.latitude);
    //   // console.log(libraryItem.longitude);
    //   // console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
    // });

  },
  function (err) {
    console.log('Error occured');
  },
  { // optional options
    thumbnailWidth: 140,
    thumbnailHeight: 140,
    quality: 0.8,
    includeAlbumData: true // default
  }
);
        
        
