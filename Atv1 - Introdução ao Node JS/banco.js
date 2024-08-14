const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('dbCadastro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Cliente = sequelize.define('cliente', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }


})

// Cliente.sync({ force: true })


Cliente.bulkCreate([{
    nome: 'João',
    endereco: 'Rua 1',
    bairro: 'Bairro 1',
    cep: '12345678',
    telefone: '12345678',
    celular: '12345678'
},
{
    nome: 'Maria',
    endereco: 'Rua 2',
    bairro: 'Bairro 2',
    cep: '23456789',
    telefone: '23456789',
    celular: '23456789'
}, {
    nome: 'Bianca',
    endereco: 'Rua 3',
    bairro: 'Bairro 3',
    cep: '12345667',
    telefone: '12345667',
    celular: '12345667'
}])
