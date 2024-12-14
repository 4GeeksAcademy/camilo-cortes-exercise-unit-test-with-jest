const sum = (a,b) => {
    return a+b
}
console.log(sum(7,3));
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDolarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
       let conversorDollarToYen = ((1*oneEuroIs["JPY"])/oneEuroIs["USD"]).toFixed(2)
       let valueInYen = valueInDollar * conversorDollarToYen;
    // Retornamos el valor en Yenes
     return valueInYen;
}
const fromYentoPound = function(valueInYen) {
    // Convertimos el valor a Yenes
    let conversorYentoPound = ((1*oneEuroIs["GBP"])/oneEuroIs["JPY"]).toFixed(2)
    let valueInPound = valueInYen * conversorYentoPound;
    // Retornamos el valor en Libras
    return valueInPound;
}




module.exports ={sum,fromEuroToDollar,fromDolarToYen,fromYentoPound}
