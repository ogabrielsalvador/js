// Escrevendo os valores do vetor de forma personalizada

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

// Maneira 1:
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}

// Maneira 2: mais simples e específica.
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
