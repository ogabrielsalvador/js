function contar() {
    // lendo os dados do HTML
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('resultado')

    // tratamento de erro no caso da falta do preenchimento de algum dado
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Faltam dados, é impossível contar...'

    } else {
        res.innerHTML = 'Contando... <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        // tratamento de erro no caso do passo igual a 1
        if (p <= 0) {
            alert('Passo inválido. Considerando Passo igual a 1')
            p = 1
        }

        // inicio da contagem
        if (i < f) {        // ordem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {            // ordem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        }
        res.innerHTML += `\u{1F3C1}`    // esses códigos referem-se aos emoji
    }
}