function Saque(valorSaque) {
    let cem = 0
    let cinquenta = 0
    let dez = 0
    let cinco = 0
    let um = 0
    let valorNota = notasretorno(valorSaque)

    while (valorSaque >=  valorNota) {
        switch(valorNota) {
            case 100:
                valorSaque -= 100
                cem++
                break
            case 50:
                valorSaque -= 50
                cinquenta++
                break
            case 10:
                valorSaque -= 10
                dez++
                break
            case 5:
                valorSaque -= 5
                cinco++
                break
            case 1:
                valorSaque -= 1
                um++
                break
        }
            valorNota = notasretorno(valorSaque)
    }
    return resultado(cem, cinquenta, dez, cinco, um)
}

function notasretorno(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }   
}

function resultado(cem, cinquenta, dez, cinco, um) {
    let Resultado = ''
    
    if (cem > 0) {
        Resultado += `${cem} notas de R$ 100. `
    } if (cinquenta > 0) {
        Resultado += `${cinquenta} notas de R$ 50. `
    } if (dez > 0) {
        Resultado += `${dez} notas de R$ 10. `
    } if (cinco > 0) {
        Resultado += `${cinco} notas de R$ 5. `
    } if (um > 0) {
        Resultado += `${um} notas de R$ 1. `
    }

    return Resultado
}

console.log(Saque(687))