function carregar() {
    // chamando os id's do HTML
    let msg1 = window.document.getElementsByClassName('msg')[0]
    let msg2 = window.document.getElementsByClassName('msg')[1]
    let foto = window.document.getElementById('foto')

    // Pegando os dados de tempo do momento
    let agora = new Date()
    let cHora = agora.getHours()
    let cMinutos = agora.getMinutes()
    let cSegundos = agora.getSeconds()

    // Editando para sempre aparecer com dois dígitos
    let hora = cHora < 10 ? `0${cHora}` : cHora
    let minuto = cMinutos < 10 ? `0${cMinutos}` : cMinutos
    let segundo = cSegundos < 10 ? `0${cSegundos}` : cSegundos

    // Fazendo as restrições de acordo com o período do dia

    // MANHÃ
    if(hora > 5 && hora < 12) {
        msg1.innerHTML = 'Boa dia!'
        msg2.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
        foto.innerHTML = '<img id="foto" src="imagens/manha.png" alt="Foto do amanhecer">'
        document.body.style.backgroundColor = '#e2cd9f'

    // TARDE
    } else if(hora < 18) {
        msg1.innerHTML = 'Boa tarde!'
        msg2.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
        foto.innerHTML = '<img id="foto" src="imagens/tarde.png" alt="Foto do entardecer">'
        document.body.style.backgroundColor = '#b9846f'

    // NOITE
    } else {
        msg1.innerHTML = 'Boa noite!'
        msg2.innerHTML = `Agora são ${hora}:${minuto}:${segundo}`
        foto.innerHTML = '<img id="foto" src="imagens/noite.png" alt="Foto do anoitecer">'
        document.body.style.backgroundColor = '#515154'
    }
}

// Força a function carregar() a ficar em loop
// Com isso o tempo no site fica atualizando em tempo real
let Timer = setInterval(carregar, 1000)
