function planodesaude(idade) {
    const valor = 100
    if (idade < 10) {
        return(`R$ = ${valor + 80}`)
    } else if (idade > 10 && idade <= 30) {
        return(`R$ = ${valor + 50}`)
    } else if (idade > 30 && idade <= 60) {
        return(`R$ = ${valor + 95}`)
    } else {
        return(`R$ = ${valor + 160}`)
    }
}

console.log(planodesaude(75))