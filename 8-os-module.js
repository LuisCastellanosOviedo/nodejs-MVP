const os = require('os')

// info abount current user 
const user = os.userInfo()
console.log(user)

// methos returns the system uptime in seconds
console.log(`The system uptime in seconds is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}


console.log(currentOS)

