// Tipos de função
// Função declarativa
// Deve ser declarada usando a palavra reservada function seguida do nome da funçao, parênteses "()" e chaves "{}"

function nomeDaFuncao() {    // Deve ser nomeada obrigatioriamente
    alert('Sou uma função declarativa!');
}
// Devemos chamar a função para ver o resultado
nomeDaFuncao();    // Chamando a função

// Expressão de função são funções atribuídas à expressões
// a nomeação é opcional
// com nomeação
var funcao = function funcao() {
    console.log('Sou uma expressão de função nomeada!');
}
funcao();
// sem nomeação
var funcao = function() {
    alert('Sou uma expressão de função não nomeada!');
}
funcao();

// arrow Function é uma função de expressão de sintaxe curta
// sempre anônima, não pode ser nomeada
// deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"
var funcao = () => {
    alert('Sou uma função anônima!')
};
funcao();