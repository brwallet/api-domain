const LOG_MESSAGES = {
    ACCESS: {
        CREATE_TRANSACTION_KEY_MESSAGE: "Recebendo requisição para criação da chave transacional",
        GET_TRANSACTION_KEY_MESSAGE: "Recebendo requisição para busca de chave transacional",
        GET_EXEMPLE_KNEX_MESSAGE: "Testar funcionalidade KNEX",
        UPDATE_TRANSACTION_KEY_BY_ID: "Recebendo requisição para atualização da chave transacional por ID",
        DELETE_TRANSACTION_KEY_BY_ID: "Recebendo requisição para inativação da chave transacional por ID",
    },
    INFO: {
        CREATING_TRANSACTION_KEY: "Criando chave transacional na base de dados",
        GETTING_ACTIVES_TRANSACTION_KEY: "Buscando a transacional ativa na base de dados",
        UPDATING_TRANSACTION_KEY_BY_ID: "Atualizando chave transacional por ID",
        DELETING_TRANSACTION_KEY_BY_ID: "Deletando chave transacional por ID",
    },
    ERROR: {
        TRANSACTION_KEY_NOT_FOUND: "entidade não encontrada",
    }
}

module.exports = LOG_MESSAGES;