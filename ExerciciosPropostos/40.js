const resultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('A')
            break
        case 8: case 7:
            console.log('B')
            break
        case 6: case 5:
            console.log('C')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('D')
            break
        default:
            console.log('Nota Inválida')
    }
}

resultado(9.5)
resultado(8.9)
resultado(6.3)
resultado(2)
resultado(11)