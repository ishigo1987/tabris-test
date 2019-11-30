cordova.plugins.DozeOptimize.IsIgnoringBatteryOptimizations(function (responce){
      console.log("IsIgnoringBatteryOptimizations: "+responce);
          if(responce=="false")
          {
            cordova.plugins.DozeOptimize.RequestOptimizations(function (responce){
              console.log(responce);
            }, function (error){
            console.error("BatteryOptimizations Request Error"+error);			
            });
          }
          else
          {
            console.log("Application already Ignoring Battery Optimizations");
          }		
    }, function (error){
    console.error("IsIgnoringBatteryOptimizations Error"+error);    
    });