const name = "Pedro"
const peso = 63
const altura = 1.67

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${name}, você está acima do peso ideal!`)
} else {
    console.log(`${name}, você está com o peso ideal!`)
}