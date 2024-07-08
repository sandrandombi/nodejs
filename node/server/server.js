const http = require ("http")

const PORT = 4000


// const requestListener =(req,res)=>{
// res.writeHead(200)
// res.end ("Mon premier serveur Web")
// }

const requestListener = (req, res) =>{
    res.setHeader("Content-Type","text/html")
res.writeHead (200)
res.end (`<html>
<body><h1>Bonjour Bootcamp! Comment vous trouvez Node JS?</h1>
</body>
</html>`)
}

const server= http.createServer(requestListener)

server.listen(PORT,host,() => {
    console.log(`serveur est démarré sur http://${host}:${PORT}`);
})