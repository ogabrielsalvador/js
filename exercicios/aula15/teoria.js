
// VETORES

/*
Os vetores ("array" em inglês) em JavaScript são nada mais do que variáveis compostas. Ou seja, são variáveis que podem possuir diversos valores.

Fazendo uma analogia, são como as LISTAS em Python.
*/

// aqui eu estou definindo os valores do vetor
let num = [5, 8, 4]     // num = [5, 8, 4]

// adicionar o valor 6 na posição 3 do vetor
num[3] = 6              // num = [5, 8, 4, 6]

// adicionar o valor 7 no final do vetor
num.push(7)             // num = [5, 8, 4, 6, 7]

// contar qts elementos há no vetor
num.length              // 5 (significa que o vetor num possui 5 elementos)

// colocar os elementos em ordem no vetor
num.sort()              // num = [4, 5, 6, 7, 8]

// escrevendo os valores do vetor de forma personalizada
for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

// buscando a posição de algum valor
num.indexOf(7)          // 3 (significa que o valor 7 está na posição 3)
num.indexOf(3)          // -1 (significa que o valor 3 não foi encontrado no vetor num)
