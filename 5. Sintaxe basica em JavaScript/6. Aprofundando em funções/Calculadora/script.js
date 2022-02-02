function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 -Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5- Disão Inteira (%)\n 6 - Potenciação (**)'));
    console.log(operacao);

    if (!operacao || operacao >= 7) {
        alert('erro - operação inválida');
        calculadora();
    }
    else {

        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('erro - parâmetros inválidos');
            calculadora();
        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                nova_operacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                nova_operacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                nova_operacao();
            }
            function divisao_real() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                nova_operacao();
            }
            function divisao_inteira() {
                resultado = n1 % n2;
                alert(` O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                nova_operacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                nova_operacao();
            }

            function nova_operacao () {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - SIM\n 2 - NÃO');
                if (opcao == 1){
                    calculadora();
                }
                if (opcao == 2) {
                    alert('Até mais!');
                }
                else {
                    alert('Digite uma opção válida');
                }

            }


            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}
calculadora();
