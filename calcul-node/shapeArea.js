// calculer circleArea pour recuperer la valeur de PI (mATH.PI)

const PI = Math.PI
function circleArea (radius){
    return PI * radius * radius
}


module.exports.circleArea= circleArea

// calculer squerArea
function squerArea (cote){
    return cote * cote 
}

module.exports.squerArea = squerArea