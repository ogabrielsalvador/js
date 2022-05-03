
// FUNÇÕES

/*
'São ações executadas assim que são CHAMADAS ou em decorrência de algum EVENTO.'
'Uma FUNÇÃO pode receber PARÂMETROS e retornar um RESULTADO.'

As funções possuem uma "chamada", seguida de algum(uns) "parâmetro"(s), tendo em seguida alguma "ação", e por fim um "retorno".

São bem similares as funções em Python.
*/


// EXEMPLO DE FUNÇÃO
function par_impar(n) {         // o 'n' é o PARÂMETRO
    if (n % 2 == 0) {           // a AÇÃO a ser realizada
        return 'par'            // um dos possíveis RETORNOS obtidos
    } else {
        return 'ímpar'          // um dos possíveis RETORNOS obtidos
    }
}
console.log(`Primeira função: ${par_impar(11)}.`)      // realizando a CHAMADA da função e mostrando na tela o resultado


// FUNÇÃO COM OS PARÂMETROS PRÉ-DEFINIDOS
function soma(n1=0, n2=0) {     // os PARÂMETROS PRÉ-DEFINIDOS são para caso algum parâmetro não seja definido na chamada.
    return n1 + n2
}
console.log(`Segunda função: ${soma(7)}.`)


// COLOCANDO UMA VARIÁVEL RELACIONADA A FUNÇÃO
let v = function(x) {                               // a variável passa a ser uma chamada da função
    return x*2
}
console.log(`Terceira função: ${v(5)}.`)            // eu passei para minha variável um parâmetro e ela realizou a função


// CALCULANDO O FATORIAL
// 5! = 5 x 4 x 3 x 2 x 1
function Fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {                   // uso de laços de repetição
        fat *= c
    }
    return fat
}
console.log(`Quarta função: ${Fatorial(5)}.`)


// FUNÇÃO RECURSIVA
// 5! = 5 x 4!
// n! = n x (n - 1)!
// 1! = 1
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)            // essa função chama ela mesma durante sua ação
    }                                       // ela irá ficar fzd essa repetição até chegar em 1 (no 'if', pois o 'else' sempre irá chama-la dnv)
}
console.log(`Quarta função: ${fatorial(5)}.`)
