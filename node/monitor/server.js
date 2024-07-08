const express = require("express");
const os = require("os");
const path = require("path");
const PORT = 5300;

const app = express();
function getSysData (){
    const processMemoryUsage = process.memoryUsage().rss
return {
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    cpuLoad : os.loadavg(),
    processMemoryUsage 
}}


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get ("/resources", (req, res)=>{
    res.json(getSysData())
})
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact.html"));
});
app.listen(PORT, () => {
  console.log(`serveur demarrer sur http://localhost:${PORT}`);
});