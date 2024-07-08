
// cercle
const {circleArea} =  require ("./shapeArea.js")
// carre
const {squerArea} = require ("./shapeArea.js")

const radius = process.argv [2]
const cote = process.argv [1]


const radiusCircle = circleArea (radius)
const carre = squerArea (cote)


console.log(radiusCircle);
