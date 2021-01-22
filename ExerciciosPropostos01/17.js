function planoDeTrabalho(plano, salário) {
    switch (plano) {
        case 'A':
            return(console.log(salário + (salário * 0.1)))
            break
        case 'B':
            return(console.log(salário + (salário * 0.15)))
            break
        case 'C':
            return(console.log(salário + (salário * 0.2)))
            break
        default:
            console.log('Plano Inválido')
    }
}

planoDeTrabalho('A', 100)
planoDeTrabalho('B', 1000)
planoDeTrabalho('C', 10000)
planoDeTrabalho('D', 500)