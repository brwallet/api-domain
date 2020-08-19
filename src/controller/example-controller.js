const { ResponseBodyUtils } = require('../infra/utils/index');
const {LogEvent, LOG_LEVEL} = require('../infra/log/index');

class ExampleController {
    
    async get(req, res) {
        try {
            const data = [
                {
                    id: 1,
                    name: "Creditas"
                },
                {
                    id: 2,
                    name: "Cielo"
                },
                {
                    id: 3,
                    name: "Ame Digital"
                },
            ];

            return ResponseBodyUtils.success200OkResponse(res, data);
        } catch (error) {
            new LogEvent(LOG_LEVEL.ERROR, error.message).log();
            return ResponseBodyUtils.errorResponse(res, error);
        }
    }
}

module.exports = ExampleController;