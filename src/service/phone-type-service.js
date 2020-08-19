const PhoneTypeRepository = require('../repository/phone-type-repository');
const { PhoneTypeSchema } = require('../schema/index');

class PhoneTypeService {

    async list() {
        let response = [];

        const repo = new PhoneTypeRepository();
        const models = await repo.list();

        if (models) {
            models.forEach(m => {
                let schema = new PhoneTypeSchema();
                schema.modelToSchema(m);
                response.push(schema);
            });
        }

        return response;
    }

}

module.exports = PhoneTypeService;