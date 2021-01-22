const numeros = [88, 34, 55, 90, 20, 42]

let soma = () => numeros.reduce(function(x, y) {
    return x + y
})

console.log((soma() / numeros.length).toFixed(2))