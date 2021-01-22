function classificar(nota) {
    let = correcao = arredondar(nota)
    if (nota >= 40) {
        return(`Aprovado com ${correcao}`)
    } else {
        return((`Reprovado com ${correcao}`))
    }
}

function arredondar(nota) {
    if (nota % 5 > 2){
        return (nota + (5 - nota % 5))
    } else {
        return nota
    }
}

console.log(classificar(68))