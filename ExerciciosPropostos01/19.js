function lanchonete(código, quantidade) {
    switch(código) {
        case 100:
            return(console.log(`Valor a ser pago = R$ ${(quantidade*3).toFixed(2)}`))
            break
        case 200:
            return(console.log(`Valor a ser pago = R$ ${(quantidade*4).toFixed(2)}`))
            break
        case 300:
            return(console.log(`Valor a ser pago = R$ ${(quantidade*5.5.toFixed(2))}`))
            break
        case 400:
            return(console.log(`Valor a ser pago = R$ ${(quantidade*7.5).toFixed(2)}`))
            break
        case 500:
            return(console.log(`Valor a ser pago = R$ ${(quantidade*3.5).toFixed(2)}`))
            break
        case 600:
            return(console.log(`Valor a ser pago = R$ ${(quantidade*2.8).toFixed(2)}`))
            break
        default:
            console.log('Código Inválido')
    }
}

lanchonete(100, 3)
lanchonete(400, 3)
lanchonete(500, 5)
lanchonete(900, 2)