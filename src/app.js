
const{CameraView, contentView, device, permission} = require("tabris");

if (permission.isAuthorized('camera')) {
    displayCamera();   
} else {
    permission.requestAuthorization("camera").then((responseStatus) => {
        if (responseStatus !== "granted") {
            // Permission denied
        } else {
            displayCamera();
        }
    });
}

function displayCamera(){
  const camera = device.cameras[0];
  camera.active = true;
  new CameraView({layoutData: 'stretch', camera}).appendTo(contentView);
}