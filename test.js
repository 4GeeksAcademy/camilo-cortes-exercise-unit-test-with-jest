const {sum,fromDolarToYen,fromYentoPound} =require('./app.js');
 test('adds 14 + 9 to equal 23',()=>{
    let total = sum (14,9);
    expect(total).toBe(23);
 })
 test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Dollar should be 149.99 Yen", function() {

   const  yen = fromDolarToYen(3.5);   
   const expected = 3.5 * 146.26;
   expect(yen.toFixed(2)).toBe(expected.toFixed(2));
})

test("One yen should be 0.01 Pound", function() {
   const pound = fromYentoPound(3.5);
   const expected = 3.5 * 0.01;
   expect(pound.toFixed(2)).toBe(expected.toFixed(2));

})


