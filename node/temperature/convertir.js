function celsiusToFahrenheit (c) {
    return c * 1.8 + 32
}

function fahrenheitToCelsius (f){
 return (f - 32) / 1.8
}

module.exports.c2f = celsiusToFahrenheit
module.exports.f2c = fahrenheitToCelsius