function calculadora(x, y, operador) {
    switch (operador) {
        case '+':
            let soma = x + y
            return (console.log(`${x} ${operador} ${y} = ${soma}`))
            break
        case '-':
            let sub = x - y
            return (console.log(`${x} ${operador} ${y} = ${sub}`))
                break
        case '*':
            let multi = x * y
            return (console.log(`${x} ${operador} ${y} = ${multi}`))
            break
        case '/':
            let div = x / y
            return (console.log(`${x} ${operador} ${y} = ${div}`))
            break
        default:
            console.log('Operação Inválida')
    }
}

calculadora(2,3,'+')
calculadora(5,3,'-')
calculadora(4,3,'*')
calculadora(20,4,'/')
calculadora(10,2,'%')