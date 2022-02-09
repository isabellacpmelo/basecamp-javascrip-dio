function comparaNumeros(num1, num2) {
    const primeiraFrase = criaPrimeiraFrase (num1, num2);
    const segundaFrase = criarSegundaFrase (num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = `não`;

    if (num1 === num2) {
        simNao = '';
    }
    return `${primeiraFrase} ${simNao} são iguais.`;
}

function criarSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if (soma > 10) {
        comparaDez = 'maior';
    }
    if (soma > 20) {
        comparaVinte = 'maior';
    }
    return `Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`;
}

console.log(comparaNumeros(2,3));


