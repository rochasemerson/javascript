function concessionaria(carro) {
    switch(carro) {
        case 'hatch':
            console.log('Compra efetuada com sucesso')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel')
    }
}

concessionaria('hatch')
concessionaria('sedan')
concessionaria('carreta')