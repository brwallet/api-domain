const DatabaseFactory = require('./database-factory');

class PhoneTypeRepository {
    #conn = new DatabaseFactory();

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
        return await this.#conn.executeQuery(query, args);
    }

}

module.exports = PhoneTypeRepository;