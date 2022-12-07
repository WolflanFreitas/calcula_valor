import {calcularMontante, arredondar} from "../src/calc-value.js"

describe('calcularMontante', () => {
    test('Com uma prestação o montante é igual ao capital', () => {
        //Operação
        const montante = calcularMontante(100, 0.0175, 1);
    
        //Resultado ou Comportamento esperado
        expect(montante).toBe(100);
    });
    
    test('Com 4 prestações o montante é acrescido de juros', () => {
        const montante = calcularMontante(500, 0.025, 4);
    
        expect(montante).toBe(538.45);
    });
});

describe('arredondar', () => {
    test('Arredondar em duas casas decimais', () => {
        const resultado = arredondar(538.4453124999998);
        expect(resultado).toBe(538.45);
    });
});