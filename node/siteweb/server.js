const http = require ("http")
const fs = require("fs")

const PORT = 4001

const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.writeHead(
            200,
            { "Content-Type": "text/html" })
        let html = fs.readFileSync(__dirname + "/home.html", "utf-8")
        res.end(html)
        }else if (req.url === "/apropos") {
            res.writeHead(
                200,
                { "Content-Type": "text/html" })
            let html = fs.readFileSync(__dirname + "/apropos.html", "utf-8")
            res.end(html)
        }else if (req.url === "/services") {
            res.writeHead(
                200,
                { "Content-Type": "text/html" })
            let html = fs.readFileSync(__dirname + "/services.html", "utf-8")
            res.end(html)
        }else if (req.url === "/contact") {
            res.writeHead(
                200,
                { "Content-Type": "text/html" })
            let html = fs.readFileSync(__dirname + "/contact.html", "utf-8")
            res.end(html)
}})
server.listen(PORT, () => {
    console.log(`server est démarré sur http://localhost:${PORT}`);
})