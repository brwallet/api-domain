class PhoneTypeSchema {

    modelToSchema(model){
        this.id = model.id_tipo_telefone;
        this.name = model.nome;
    }
}

module.exports = PhoneTypeSchema;