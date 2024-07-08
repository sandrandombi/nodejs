const os = require("os")
const local = {
    "Main Directory": os.homedir(),
    "Os Type": os.type(),
    "Local hostname":os.hostname(),
    "Memory Free": os.freemem() /1024*1024,
    "Plateform": os.platform(),
    "Achitecture":os.arch(),
    "CPU":os.cpus(),
    "Uptime": os.uptime() / 60 / 60,

}
console.log(local);