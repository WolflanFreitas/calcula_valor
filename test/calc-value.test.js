let calcularMontante = require('../src/calc-value');

test('Com uma prestação o montante é igual ao capital', () => {
    //Operação
    const montante = calcularMontante.calcularMontante(100, 0.0175, 1);

    //Resultado ou Comportamento esperado
    expect(montante).toBe(100);
})