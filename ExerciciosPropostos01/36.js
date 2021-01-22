const vetor = [1, 2, 3, 4, 5, 6, 7, 8]

function multi1(vetor, x) {
    const resultado1 = []
    vetor.forEach(i => {
        resultado1.push(i * x)
    })
    return resultado1
}

function multi2(vetor, x) {
    const resultado2 = []
    vetor.forEach(i => {
        if (i > 5) {
        resultado2.push(i * x)
    }})
    return resultado2
}

console.log(multi1(vetor, 2))
console.log(multi2(vetor, 2))