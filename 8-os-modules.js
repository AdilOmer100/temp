// modules
// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative');
// require('./7-mind-grenade');


const os = require('os');
//info about current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds 
console.log(`the seyste up time is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);