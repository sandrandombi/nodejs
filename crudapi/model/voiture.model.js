const mongoose = require("mongoose")

const voitureSchema = mongoose.Schema({
    make: {
        type: String, 
        required: [ true, "Nom de maker est obligatoire"]
    },
     model: {
        type: String,
        required: [true, "Nom du modele est obligatoire"]
     },
     year:{
        type: Date,
        required: [true, "Nom de la year est obligatoire"]
     },
     transmission: {
        type: String,
     },
     fuelType: {
        type: String,

     },
     mileage: {
        type: Number,
        required: [true, "Nom du mileage est obligatoire"]
     },
     price: {
        type: Number,
        required: (true, "Nom du price est obligatoire")

     },
     sales:{
        type: Number,
        default: 0
     },
     country:{
        type: String,
        required: [true, "ajouter un country"]
     },
     inStock:{
        type: Boolean,

     }
})

const voitureModel = mongoose.model("voitures",voitureSchema)

module.exports = voitureModel