module.exports = ()=>{
    window.powerManagement.dim(function () {
        console.log('Partial Wakelock acquired');
    }, function () {
        console.log('Failed to acquire wakelock');
    });
    window.powerManagement.setReleaseOnPause(false, function () {
        console.log('setReleaseOnPause successfully');
    }, function () {
        console.log('Failed to set');
    });  
    // window.powerManagement.release(function () {
    //     console.log('Wakelock released');
    // }, function () {
    //     console.log('Failed to release wakelock');
    // });
};