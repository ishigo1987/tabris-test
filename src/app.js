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
        

        galleryAPI.getAlbums(function(items)
        {
          items.forEach((item)=>{
            galleryAPI.getMedia({title:item.title}, function(items)
             {
                console.log(items)

            }, function(error){
                console.log(error);
            });
          })
          

        }, function(error){
            console.log(error);
        });
        
