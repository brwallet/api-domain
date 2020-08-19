const { ExampleController } = require('../controller/index')
const exampleController = new ExampleController()

module.exports = (app) => {
  app.route('/v1/examples')
    .get(exampleController.get);

  // app.route('/v1/examples/:id')
  //   .get(exampleController.get)
  //   .put(exampleController.update)
  //   .delete(exampleController.remove);

}
