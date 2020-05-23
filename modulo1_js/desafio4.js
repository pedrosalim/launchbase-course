const programmer = {
    name: "Pedro",
    age: 22,
    techs: [   
        {name: "C++", specialty: "Desktop"},
        {name: "Python", specialty: "Data Science"},
        {name: "Javascript", specialty: "Web/Mobile"},
    ],
}
console.log(`O usuário ${programmer.name} tem ${programmer.age} anos e usa a tecnologia ${programmer.techs[0].name} com especialidade em ${programmer.techs[0].specialty}`)