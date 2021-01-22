const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const par = numero => numero % 2 == 0 
const impar = numero => numero % 2 != 0

const pares = (numeros.filter(par))
const impares = (numeros.filter(impar))

console.log(pares.length, impares.length)