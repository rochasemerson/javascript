const numeros = [88, 34, 55, 90, 20, 42]

function menorMaior(numeros) {
    let menor
    let maior
    for (let i = 0; i < numeros.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = numeros[i]
            menor = numeros[i]
        } else {
            if (numeros[i] > maior) {
                maior = numeros[i]
            } if (numeros[i] < menor) {
                menor = numeros[i]
            }
        }
    }
    return [menor, maior]
}

console.log(menorMaior(numeros))