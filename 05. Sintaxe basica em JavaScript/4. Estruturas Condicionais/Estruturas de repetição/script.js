// Estruturas de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: '12', propriedade2: 'valor2', propriedade3: 'valor3'}

// fo(r - executa uma funcão até que ela seja falsa
for (let indice = 0; indice < array.length; indice ++) {
    console.log(indice);
}
// for/in executa a repetição a partir de uma propriedade
// com array
for (let i in array) {
    console.log(i);
}
// com object
for (i in object) {
    console.log(i);
}
// for/of - executa repetição a partir de um valor
// com array
for (i of array) {
    console.log(i);
}
// com object não funciona pois não é iterável
for (i of object.propriedade1) {
    console.log(i);
} 
// while - executa enquanto for verdadeira
var a = 0;
while (a < 10) {
    a++;
    console.log(a)
}

// do - executa até que seja falsa
do {
    a++;
    console.log(a);
} while (a < 10);
