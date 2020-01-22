let listaDeUsuarios = [ 
    {
        login:'fabio',
        password:'123',
        name: 'Fábio',
        age: 25
    },
    {   login:'layla',
        password:'123',
        name: 'Layla',
        age: 25
    },
    {   login:'danilo',
        password:'123',
        name: 'Danilo',
        age: 28
    }
];

const maisVelhos = listaDeUsuarios.filter( x => x.age > 25);
console.log(maisVelhos);


const found = listaDeUsuarios.find(usr => usr.login === 'fabio' && usr.password === '123');
console.log(found);





listaDeUsuarios = listaDeUsuarios.map(obj => {
    return {...obj, name:obj.name.toUpperCase()}
    });
console.log(listaDeUsuarios);


const listaDeSalarios = [
    1000,
    2000,
    3000,
    4000,
    5000
]

 const reajust = listaDeSalarios.map(salario => 
    salario*1.03);
    console.log(listaDeSalarios);
    console.log(reajust);