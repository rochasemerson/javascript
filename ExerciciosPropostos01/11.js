function bissexto(ano){
    if (ano % 4 == 0 && ano % 100 != 0) {
        return(`O ano ${ano} é Bissexto`)
    } else if (ano % 100 == 0 && ano % 400 != 0){
        return(`O ano ${ano} não é Bissexto`)
    } else {
        return(`O ano ${ano} é Bissexto`)
    }
}

console.log(bissexto(44))
console.log(bissexto(300))
console.log(bissexto(2000))