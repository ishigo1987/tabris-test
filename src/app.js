const{app} = require("tabris")
cordova.plugins.foregroundService.start('GPS Running', 'Background Service', 'myicon', 3, 10);
require("./helpers/powerManagement.js")();
require("./helpers/wifiLock.js")();
require("./helpers/batteryOptimisation.js")();
require("./helpers/backgroundService.js")();
// require("./helpers/checkSms.js")();