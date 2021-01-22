const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

function intervalo() {
    let dentro = 0
    let fora = 0
    for (let i = 0; i <= numeros.length; i++) {
        if (numeros[i] >= 10 && numeros[i] <= 20) {
            dentro++
        } if (numeros[i] <10 || numeros[i] > 20) {
            fora++
        }
    }
    console.log(dentro, fora)
}

intervalo()