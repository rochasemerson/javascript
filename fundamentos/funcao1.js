//Função sem retorno
function imrpimirSoma(a,b) {
    console.log(a + b)
}

imrpimirSoma(2,3)
imrpimirSoma(2, 10, 4, 5, 6, 7, 8)
imrpimirSoma()

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))