//Estruturas Condicionais
var jogador_1 = 0;
var jogador_2 = 1;
var placar;

// if ternário
jogador_1 != -1 && jogador_2 != -1 ? console.log('Jogadores válidos') : console.log('Jogadores não válidos!');
// Usando if
if (jogador_1 > 0 && jogador_2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador_1 > jogador_2;
}
// Usando else if
else if (jogador_2 > 0 && jogador_1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador_2 > jogador_1;
}
// Usando else
else {
    console.log('Ninguém marcou ponto');
}
// Usando o switch
switch (placar) {
    case placar = jogador_1 > jogador_2:
        console.log('Jogador 1 ganhou!');
        break
    case placar = jogador_2 > jogador_1:
        console.log('Jogador 2 ganhou!');
        break
    default:
        console.log('Ninguém ganhou!');
}
