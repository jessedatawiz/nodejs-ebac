const {Schema} = require('mongoose');

const Pedido = new Schema({
    cliente : {
        nome:{
            type: String,
            required: true,
        },
        sobrenome:{
            type: String,
            required: true,
        }
    },
    pizza:[
        {
            sabor:{
                type: String,
                required: true,
            },
            quantidade:{
                type: Number,
                required: true,
            },
            tamanho:{
                type: String,
                required: true,
                enum: ['Pequeno', 'Médio', 'Grande']
            }

        }
    ],
    metodoDePagamento:{
        type: String,
        required: true,
        enum: ['Cartão de Crédito', 'PIX']
    },
    total:{
        type: Number,
        required: true,
    },
    pago:{
        type: Boolean,
        default: false,
    }

});

module.exports = Pedido