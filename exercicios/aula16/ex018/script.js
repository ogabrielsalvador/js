// pegando os dados do HTML
let txt_num = document.getElementById('numero')
let lista = document.getElementById('sel_lista')
let res = document.querySelector('div#res')
let valores = []

function isVazio(n) {                   // tratamento de erro -> não teve valor digitado
    if (n.length == 0) {
        return true
    } else return false
}

function inIntervalo(n, min, max) {     // tratamento de erro -> valor está no intervalo permitido
    if (n < min || n > max) {
        return false
    } else return true
}

function inLista(n, lista) {            // tratamento de erro -> valor já está na lista
    if (lista.indexOf(n) != -1) {
        return true
    } else return false
}

function semErros() {                   // irá conferir se não há nenhum erro no valor informado
    if (isVazio(txt_num.value)) {
        alert('Nenhum valor foi digitado!')
        return false
    } 
    else {
        let num = Number(txt_num.value)     // convertendo o valor informado em número
        if (!inIntervalo(num, 1, 100)) {             
            alert('O número digitado está fora do intervalo permitido')
            return false
        } 
        else {
            if (inLista(num, valores)){
                alert('O número digitado já está na lista')
                return false
            }
            else {
                return true
            }
        }
    }
}

function adicionar() {                  // adicionando o número digitado no select
    if (semErros()) {
        let num = Number(txt_num.value)                 // convertendo o valor informado em número

        valores.push(num)                               // adicionando o número no final do vetor

        let item = document.createElement('option')     // criando um option
        item.text = `Valor ${num} adicionado.`          // criando o texto do option
        lista.appendChild(item)                         // adicionando o option no select
    }
    txt_num.value = ''                                  // limpar a caixa de inserção p/ o usuário
    txt_num.focus()                                     // faz o cursor voltar para a caixa de inserção
    res.innerHTML = ''                                  // deixa a parte da análise dos dados em branco
}

function finalizar() {                  // realizando a análise dos números do select
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } 
    else {
        let qtde_num = valores.length

        valores.sort((a, b) => a - b)       // realiza a comparação entre os números, deixando nesse caso, em ordem crescente.
        let maior_valor = valores[qtde_num - 1]
        let menor_valor = valores[0]

        let soma = 0
        for (let pos in valores) {
            soma += valores[pos]
        }

        let media = soma / qtde_num

        res.innerHTML = 
        `
        <p>Ao todo, temos ${qtde_num} números cadastrados.</p>
        <p>O maior valor informado foi ${maior_valor}.</p>
        <p>O menor valor informado foi ${menor_valor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${media}.</p>
        `
    }
}
