const name = "Pedro"
const gender = "M"
const age = 55
const contribution = 45

const retirement = age + contribution

if ((gender == 'M' && contribution >= 35) || (gender == 'F' && contribution >= 30)) {
    if ((retirement >= 95) || (retirement >= 85)) {
        console.log(`${name} você tem ${age} anos, e o seu tempo de contribuição é ${contribution}, com isso você pode se aposentar`)
    } else {
        console.log(`${name} você ainda não pode se aposentar`)
    } 
}   else  {
    console.log(`${name} você ainda não pode se aposentar`)
}