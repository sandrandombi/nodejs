const {c2f}= require("./convertir.js")

const temp = process.argv [2]

const fahrenheitValue = c2f(temp)
console.log(`${temp} degrés en Celsius est égal à ${fahrenheitValue} fahrenheit`);