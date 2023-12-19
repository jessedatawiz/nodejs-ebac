// Lista de carros
let carros = [
    { placa: "ABC1D23", modelo: "Gol", ano: 2019 },
    { placa: "EFG4H56", modelo: "Fiesta", ano: 2018 },
    { placa: "IJK7L89", modelo: "Civic", ano: 2020 },
    { placa: "MNO1P23", modelo: "Corolla", ano: 2021 },
    { placa: "XYZ9W87", modelo: "T-Cross", ano: 2022 }
];

// Função que retorna os veículos de rodízio para o dia da semana fornecido
function veiculosRodizio(diaDaSemana) {
    let finaisPlaca = {
        0: ["1", "2"], // Segunda-feira
        1: ["3", "4"], // Terça-feira
        2: ["5", "6"], // Quarta-feira
        3: ["7", "8"], // Quinta-feira
        4: ["9", "0"], // Sexta-feira
        5: [],         // Sábado
        6: []          // Domingo
    };

    let finalPlacaRodizio = finaisPlaca[diaDaSemana];
    return carros.filter(carro => finalPlacaRodizio.includes(carro.placa.slice(-1)));
}

// Laço while para imprimir os veículos de rodízio para cada dia da semana
let dia = 0;
while (dia <= 6) {
    let veiculosDia = veiculosRodizio(dia);
    let diaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"][dia];
    console.log(`No dia ${diaSemana}, os veículos de rodízio são:`, veiculosDia);
    dia++;
}
