const tecnologias = [
    'ReactJS',
    'NestJS',
    'C puro raiz',
    'Java'
];


const query = tecnologias
    .filter(el => el.length > 5)
    .map(el => el.toUpperCase());
console.log(query);