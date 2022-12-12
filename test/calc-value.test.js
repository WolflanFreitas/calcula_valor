import { expect } from "@jest/globals";
import {calcularMontante, arredondar, calcularPrestacoes} from "../src/calc-value.js";
import "./extensions.js";

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
    test('1.005 deve retornar 1.01', () => {
        const resultado = arredondar(1.005);
        expect(resultado).toBe(1.01);
    });
});

describe('calcularPrestacoes', () => {
    test("O número de parcelas é igual ao número de prestações", () => {
        const numeroPrestacoes = 6;
        const prestacoes = calcularPrestacoes(200, numeroPrestacoes);
        expect(prestacoes.length).toBe(numeroPrestacoes);
    });

    test('Um única prestação, valor igual ao montante', () => {
        const numeroPrestacoes = 1;

        const prestacoes = calcularPrestacoes(50, numeroPrestacoes);

        expect(prestacoes.length).toBe(numeroPrestacoes);
        expect(prestacoes[0]).toBe(50);
    });

    test("Duas prestações, valor igual à metade do montante", () => {
        const numeroPrestacoes = 2;

        const prestacoes =  calcularPrestacoes(50, numeroPrestacoes);

        expect(prestacoes.length).toBe(numeroPrestacoes);
        expect(prestacoes[0]).toBe(25);
        expect(prestacoes[1]).toBe(25);
    });

    test('Valor da soma das prestações deve ser igual ao montante com duas casas decimais', () => {
        // Dado (Given)
        const numeroPrestacoes = 3;
        const montante = 100;

        // Quando (When)
        const prestacoes = calcularPrestacoes(montante, numeroPrestacoes);

        // Então (Then)
        expect(prestacoes.length).toBe(numeroPrestacoes);
        expect(prestacoes).tenhaSomaDeValoresIgual(montante);

        // for(let i = 0; i < prestacoes.length - 1; i++) {
        //     const j = i + 1;
        //     expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j])
        // }

        expect(prestacoes).sejaDecrescente();
    });

    test('Desafio semi-final', () => {
        //Given
        const numeroPrestacoes = 3;
        const montante = 101.994;

        // Quando (When)
        const prestacoes = calcularPrestacoes(montante, numeroPrestacoes);

        // Então (Then)
        expect(prestacoes.length).toBe(numeroPrestacoes);
        expect(prestacoes).tenhaSomaDeValoresIgual(montante);

        for(let i = 0; i < prestacoes.length - 1; i++) {
            const j = i + 1;
            expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j]);
        }
    });
});