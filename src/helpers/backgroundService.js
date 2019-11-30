window.BackgroundService.start(
    function(fn) {
     console.log("youpii"), 
     fn && fn() 
 },
    function() { console.log('err') }
)