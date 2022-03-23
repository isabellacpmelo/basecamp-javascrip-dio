// Tipos primitivos de variáveis

//Boolean
/*var v_ou_f = false;
console.log(v_ou_f);
console.log(typeof(v_ou_f));

//Number
var numero_qualquer = 1;
console.log(numero_qualquer);
console.log(typeof(numero_qualquer));

//String
var nome_qualquer = 'Isabella'
console.log(nome_qualquer);
console.log(typeof(nome_qualquer));*/

//------------------------------------------------------------------
// Como declarar variável
var variavel;
console.log(variavel);
console.log(typeof(variavel));

var variavel = 'Paulo';
variavel = 'Tonio';
console.log(variavel);
console.log(typeof(variavel));

let variavel2 = 'Thanos';
variavel2 = 'Peixinho Dourado';
console.log(variavel2);
console.log(typeof(variavel2));

const constante = 'Mulher Maravilha';
console.log(constante);

var escopo_global = 'Global';
console.log(escopo_global);

function escopo_local() {
    let escopo_local_interno = 'Local';
    console.log(escopo_local_interno);
}
escopo_local();

//-------------------------------------------------------------
//Atribuição
var atribuição = 'Spike';
console.log(atribuição);
//Comparação
var comparacao = '0' == 0;
console.log(comparacao);
//Comparação Identica
var comparacao_identica = '0' === 0;
console.log(comparacao_identica);

// ----------------------------------------------------------
// Operadores aritméticos, relacionais e lógicos
//Operadores aritméticos
var adicao = 1 + 1;
console.log(adicao);
var subtracao = 2 - 1;
console.log(subtracao);
var multiplicacao = 9 * 9;
console.log(multiplicacao);
var divisao_real = 9 / 3;
console.log(divisao_real);
var divisao_resto = 7 % 2;
console.log(divisao_resto);
var potenciacao = 3 ** 2;
console.log(potenciacao);

//Operadores Relacionais
var maior_que = 5 > 2;
console.log(maior_que);
var menor_que = 5 < 2;
console.log(menor_que);
var maior_ou_igual = 6 >= 6;
console.log(maior_ou_igual);
var menor_ou_igual = 10 <= 9;
console.log(menor_ou_igual);

//Operadores Lógicos
var e = true && true;
console.log(e);
var ou = true || false;
console.log(ou);
var nao = !true;
console.log(nao);
