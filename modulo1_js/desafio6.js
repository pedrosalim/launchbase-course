const user = [
    {
        name: 'Savio',
        revenue: [115.3, 48.7, 98.3, 14.5],
        outgoing: [85.3, 13.5, 19.9],
    },
    {
        name: 'Marcio',
        revenue: [24.6, 214.3, 45.3],
        outgoing: [185.3, 12.1, 120.0],
    },
    {
        name: 'Lucia',
        revenue: [9.8, 120.3, 340.2, 45.3],
        outgoing: [450.2, 29.9]
    },
    {
        name: 'Pedro',
        revenue: [150, 500, 250],
        outgoing: [300, 200]
    },
    {
        name: 'Sofia',
        revenue: [500, 500, 500],
        outgoing: [100]
    }
]

function somaNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma;
}

function calculaSaldo(revenue, outgoing) {
    return somaNumeros(revenue) - somaNumeros(outgoing)
}

for (let i = 0; i < user.length; i++) {
    const saldo = calculaSaldo(user[i].revenue, user[i].outgoing)

    if (saldo >= 0) {
        console.log(`${user[i].name} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${user[i].name} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}