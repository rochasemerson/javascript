vetorInteiro = [2, 4, 6, 8]
vetorString = ['dois', 'quatro', 'seis', 'oito']
vetorDouble = [2.22, 4.44, 6.66, 8.88]

union = v => vetorInteiro.concat(vetorString)
union2 = v => vetorString.concat(vetorDouble)

console.log(union())
console.log(union2())