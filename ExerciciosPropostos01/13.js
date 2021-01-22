function diaSemana(dia) {
    switch(dia) {
        case 1:
            return('Fim de semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return('Dia Útil')
            break
        case 7:
            return('Fim de Semana')
            break
        default:
            return('Dia Inválido')
        
    }
}

console.log(diaSemana(1))