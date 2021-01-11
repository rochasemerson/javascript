function triangulo (x,y,z){
    if (x === y && x === y && y === z ) {
        console.log('Equilátero')
    } else if (x === y || x ===z || y === z) {
        console.log('Isósceles') 
    } else console.log('Escaleno')
}

triangulo(2,2,2)
triangulo(2,2,3)
triangulo(2,3,4)