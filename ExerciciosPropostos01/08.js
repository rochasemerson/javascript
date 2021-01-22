let stringPontos = "10, 45, 35, 29, 50, 78, 12, 66, 4, 85, 34"

function pontos (stringPontos) {
    let pontuacao = stringPontos.split(', ')
    let recorde = 0
    let pior = 1
    let maiorPonto = pontuacao[0]
    let menorPonto = pontuacao[0]

    for (let i = 1; i < pontuacao.lenght; i++) {
        if (pontuacao[i] > maiorPonto) {
            maiorPonto = pontuacao[i]
            recorde++
        } else if (pontuacao[i] < menorPonto) {
            menorPonto = pontuacao[i]
            pior = i+1
        }
    }
    return[recorde, pior]
}

console.log(pontos(stringPontos))