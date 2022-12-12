import { arredondar } from "../src/calc-value";

expect.extend(
    {
        tenhaSomaDeValoresIgual(items, soma) {
            const somaReal = arredondar(items.reduce((a, t) => a + t));
            const passou = somaReal === arredondar(soma);

            return {
                message: () => `A soma ${somaReal} deve ser igual a ${soma}`,
                pass: passou
            }
        },

        sejaDecrescente(items) {
            for(let i = 0; i < items.length - 1; i++) {
                const j = i + 1;
                if(items[i] < items[j]) {
                    return {
                        message: () => `O array dever estar em ordem decrescente`,
                        pass: false
                    }
                }
            }

            return {
                message: () => `O array dever estar em ordem decrescente`,
                pass: true
            }
        }

    }
);