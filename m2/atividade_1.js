// 1. Criando a lista de carros
let carros = [
    { placa: "ABC1D23", modelo: "Gol", ano: 2019 },
    { placa: "EFG4H56", modelo: "Fiesta", ano: 2018 },
    { placa: "IJK7L89", modelo: "Civic", ano: 2020 },
    { placa: "MNO1P23", modelo: "Corolla", ano: 2021 }
];

// 2. Adicionando um carro à lista
carros.push({ modelo: "T-Cross", ano: 2022, placa: "DFC3R43" });

// 3. Ordenando a lista pelo modelo em ordem alfabética
carros.sort((a, b) => a.modelo.localeCompare(b.modelo));

// Imprimindo a lista ordenada
console.log(carros);
