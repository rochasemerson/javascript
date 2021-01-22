function frutas(x) {
    switch(x) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
        break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
        break
        default:
            return('ERRO! Fruta Inválida')
    }
}

frutas('maçã')
frutas('kiwi')
frutas('melancia')
frutas('abacaxi')