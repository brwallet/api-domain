const { PhoneTypeController } = require('../controller/index')
const phoneTypeController = new PhoneTypeController()

module.exports = (app) => {
  app.route('/v1/phone-types')
    .get(phoneTypeController.get);

  app.route('/v1/phone-types/:id')
    .get(phoneTypeController.get)
    //   .put(exampleController.update)
    //   .delete(exampleController.remove);
    ;
}
