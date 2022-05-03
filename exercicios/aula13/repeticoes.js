// com o 'while' ele primeiro confere a condição e depois executa o bloco de operações
c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++
}

// com o 'do' ele primeiro executa o bloco de operações e depois confere a condição
c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

// o 'for' recebe o valor de inicio, o teste lógico e o incremento ao valor de inicio
// for(incio; teste; incremento)
for(var c = 1; c <= 6; c++) {
    console.log(`Passo ${c}`)
}
