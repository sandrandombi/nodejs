const http = require("http")
const fs = require("fs")
const PORT = 4001

const server = http.createServer((req, res) => {
    if (req.url === "/accueil") {
        res.writeHead(
            200,
            { "Content-Type": "text/html" })
        res.end(`<html>
            <body><h1>Bonjour Bootcamp! Comment vous trouvez Node JS?</h1>
            </body>
            </html>`)

    } else if (req.url === "/contact") {
        res.writeHead(
            200,
            { "Content-Type": "text/plain" })
        res.end(`<html>
                    <body><h1>Bonjour Bootcamp! Contactez-nous</h1>
                    </body>
                    </html>`)

    } else if (req.url === "/api") {
        res.writeHead(
            200,
            { "Content-Type": "text/html" })
        res.end(`<html>
                <body><h1> API ! Contactez-nous</h1>
                </body>
                </html>`)
    }
    else if (req.url === "/Liste") {
        res.writeHead(
            200,
            { "Content-Type": "text/html" })
        res.end(`<html>
            <body><h1> Listes des serveurs</h1>
            </body>
            </html>`)
    }
    else if (req.url === "/student") {
        res.writeHead(
            200,
            { "Content-Type": "text/html" })
        let html = fs.readFileSync(__dirname + "/student.html", "utf-8")
        res.end(html)
    }
    else if (req.url === "/data") {
        file_path = "./data.json"
        fs.readFile(file_path, (error, data) => {
            if (error) {
                if (error.code == "ENOENT") {
                    res.writeHead(400)
                    res.end(error.code)
                } else {
                    res.writeHead(500)
                    res.end(error.code)
                }
            }else {
                res.writeHead(200, { "Content-Type": "application/json" })
                res.end(data)
            }
        })
    }

    
})

server.listen(PORT, () => {
    console.log(`server est démarré sur http://localhost:${PORT}`);
})


