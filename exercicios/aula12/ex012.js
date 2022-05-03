var agora = new Date()      // ele importa os dados referente ao momento em que o programa está sendo rodado
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} horas.`)
if(hora < 6) {
    console.log('Boa Madrugada')
} else if(hora < 12) {
    console.log('Bom dia')
} else if(hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
