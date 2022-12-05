function calcularMontante(capital, taxa, periodo) {
    const montante =  capital * Math.pow((1 + taxa), periodo - 1);
    return montante;
}

export {calcularMontante}