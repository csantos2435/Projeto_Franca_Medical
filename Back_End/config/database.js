const mongoose = require('mongoose')

/*
    Usa desestruturação pra obter as variáveis de 
    ambiente necessárias para realizar a conexão ao banco de dados
*/

const{
    MONGODB_USER,
    MONGODB_PASS,
    MONGODB_SERVER,
    MONGODB_DATABASE
} = process.env

module.exports = function() {
    // Conecta ao banco de dados
    mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_SERVER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () =>
        console.log('=> MONGOSE! CONECTADO COM SUCESSO AO SERVIDOR')
    )

    mongoose.connection.on('disconnected', () =>
        console.log('=> MONGOSE! DESCONECTADO DO SERVIDOR')
    )

    mongoose.connection.on('ERROR', error =>
        console.error('*** MONGOSE! ERRO AO SE CONECTAR AO SERVIDOR: ' + error)
    )

    // Quando for determinar o comando de interrupção Ctrl+C 
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('=> MONGOSE! desconectando...')
            // Encerrar a aplicação sem erros
            process.exit(0)
        })
    })
}
