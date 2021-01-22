function calculaMedia(codigo, nota1, nota2, nota3) {
    const notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    if (media >= 5) {
    return (`Código:${codigo}
    Nota 1 = ${nota1}
    Nota 2 = ${nota2}
    Nota 3 = ${nota3}
    Média = ${media}
    Aprovado`)
    } else {
        return (`$Código{codigo}.
    Nota 1 = ${nota1}
    Nota 2 = ${nota2}
    Nota 3 = ${nota3}
    Média = ${media}
    Reprovado`)
    }
}

console.log(calculaMedia(1, 9, 8, 7))
console.log(calculaMedia(2, 2.3, 5, 6))