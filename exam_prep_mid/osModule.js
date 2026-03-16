const os = require("os");

console.log("Platform:          ", os.platform());
console.log("Arch:              ", os.arch());
console.log("Free mem:          ", os.freemem());
console.log("Total mem:         ", os.totalmem());
console.log("Up time:           ", os.uptime());
console.log("Home dir:          ", os.homedir());
console.log("User info:         ", os.userInfo());
console.log("Host name:         ", os.hostname());
console.log("Network interfaces ", os.networkInterfaces());
console.log("Cpus               ", os.cpus());
console.log("Temp dir:          ", os.tmpdir());