function verificar() {
    var agora = new Date()
    var ano_atual = agora.getFullYear()
    var ano_nasc = document.getElementById('ano_nasc')
    var resultado = document.querySelector('div#res')

    if (ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano_atual) {
        alert('O ano de nascimento informado é INVÁLIDO! Tente novamente')
    } else {
        var opcao_sexo = document.getElementsByName('sexo')
        var idade = Number(ano_atual - ano_nasc.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (opcao_sexo[0].checked) gênero = 'Homem'
        else gênero = 'Mulher'

        if (idade <= 12) {       // CRIANÇA
            img.setAttribute('src', `imagens/${gênero}/crianca.png`)
            img.setAttribute('alt', 'Foto de uma criança')
            document.body.style.backgroundColor = 'rgb(32, 162, 173)'
        } else if (idade <= 20) {       // JOVEM
            img.setAttribute('src', `imagens/${gênero}/jovem.png`)
            img.setAttribute('alt', 'Foto de um jovem')
            document.body.style.backgroundColor = 'rgb(199, 55, 55)'
        } else if (idade <= 65) {       // ADULTO
            img.setAttribute('src', `imagens/${gênero}/adulto.png`)
            img.setAttribute('alt', 'Foto de um adulto')
            document.body.style.backgroundColor = 'rgb(22, 16, 84)'
        } else {            // IDOSO
            img.setAttribute('src', `imagens/${gênero}/idoso.png`)
            img.setAttribute('alt', 'Foto de um idoso')
            document.body.style.backgroundColor = 'rgb(183, 193, 0)'
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}