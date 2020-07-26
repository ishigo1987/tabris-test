
const{permission, CameraView, device, contentView} = require("tabris");

if (permission.isAuthorized('camera')) {
    camera()  
} else {
    permission.requestAuthorization("camera").then((responseStatus) => {
        console.log(responseStatus)
        if (responseStatus !== "granted") {
            // Permission denied
        } else {
            camera()
        }
    });
}

function camera(){
    const camera = device.cameras[0];
    camera.active = true;

    new CameraView({
      layoutData: 'stretch',
      camera
    }).appendTo(contentView);
}

