function simples(ci, tj, ta) {
    let juro1 = (ci * ta * (tj / 100));
    return juro1
}

function composto(ci2, tj2, ta2) {
    let composto = ci2 * (1 + (tj2/100)) ** ta2 - ci2;
    return composto.toFixed(2)
}

console.log(simples(1000, 2, 3))
console.log(composto(1000, 2 , 3))