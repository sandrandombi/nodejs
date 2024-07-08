
// lire un fichier====================================
const fs = require("fs");
const path = require("path")
// fs.readFile("./bootcamp.txt","utf-8",(error,data)=>{
//     if(error) throw error;
//     console.log("le texte dans le fichier bootcamp est: ",data);
// })

let chemin = path.join(__dirname, "info.txt")
let contenu = "voici des nouvelles infos dans ce fichier"

// fs.writeFile (
//     chemin,
//     "voici les infos importantes",(error)=>{
//     if (error)throw error;
//     console.log("ici la méthode write file");
// })

fs.appendFile(
    chemin,
    contenu,
    (error)=> {
        if(error)throw error;
        console.log("nouveau contenu ajouté");
    }
)