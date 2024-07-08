const {f2c}= require("./convertir.js")

const temp = process.argv [2]

const celsiusValue = f2c(temp)
console.log(`${temp} degrés en fahrenheit est égal à ${celsiusValue} Celsius`);