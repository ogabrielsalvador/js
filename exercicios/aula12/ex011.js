var idade = 78
console.log(`Você tem ${idade} anos de idade.`)

// CONDIÇÕES ANINHADAS

if(idade < 16) {
    console.log('Não vota')
} else if(idade < 18 || idade > 65) {       // atalho da tecla '|' é : 'shift' + '\' (essa barra está do lado da tecla Z)
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
