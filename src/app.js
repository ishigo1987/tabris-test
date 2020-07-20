
const{contentView, device, permission} = require("tabris");

if (permission.isAuthorized('storage')) {
    console.log("Permission granted");   
} else {
    permission.requestAuthorization("storage").then((responseStatus) => {
        if (responseStatus !== "granted") {
            // Permission denied
        } else {
            console.log("Permission granted");
        }
    });
}
