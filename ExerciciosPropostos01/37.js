function pa(n, a1, r) {
    for (let x = 0; x < n; x++) {
        console.log(`${x + 1}: ${a1 += r}`)
    }
}

function pg(n, a1, r) {
    for (let x = 0; x < n; x++) {
        console.log(`${x + 1}: ${a1 *= r}`)
    }
}

(pa(5, 0, 5))
pg(7, 2, 2)