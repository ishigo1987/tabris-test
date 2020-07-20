
const{permission} = require("tabris");

if (permission.isAuthorized('camera')) {
    console.log("Permission granted");   
} else {
    permission.requestAuthorization("camera").then((responseStatus) => {
        console.log(responseStatus)
        if (responseStatus !== "granted") {
            // Permission denied
        } else {
            console.log("Permission granted");
        }
    });
}

