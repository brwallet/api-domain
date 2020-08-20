const DatabaseFactory = require('./database-factory');
var conn = new DatabaseFactory();

class PhoneTypeRepository {

    async list() {
        let query = `
            SELECT
                id_tipo_telefone,
                nome,
                ativo,
                data_criacao,
                data_atualizacao
            FROM
                dominio.tipo_telefone;`

        const args = [];
        const resultDB = await conn.executeQuery(query, args);
        
        return resultDB;
    }

}

module.exports = PhoneTypeRepository;