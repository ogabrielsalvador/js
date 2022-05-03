let num = [5, 8, 2, 9, 3]       // declarando os valores do vetor num
num.push(1)                     // adicionando o valor 1 no fim do vetor num
num.sort()                      // colocando o vetor num em ordem crescente

console.log(num)                // mostrando o vetor num na tela
console.log(`O vetor tem ${num.length} posições.`)          // calculando o tamanho do vetor num
console.log(`O primeiro valor do vetor é ${num[0]}.`)       // buscando valores em posições específicas no vetor num

let n = 8
let pos = num.indexOf(n)        // posição em que se localiza o número 'n'

if (pos == -1) {                // caso o número 'n' não exista no vetor num
    console.log(`O valor ${n} não foi encontrado.`)
} else {                        // retornando a posição do valor 'n'
    console.log(`O valor ${n} está na posição ${pos}.`)
}
