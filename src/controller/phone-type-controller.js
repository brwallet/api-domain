const { ResponseBodyUtils } = require('../infra/utils/index');
const { LogEvent, LOG_LEVEL } = require('../infra/log/index');
const PhoneTypeService = require('../service/phone-type-service');


class PhoneTypeController {

    async get(req, res) {
        try {
            const phoneTypes = await new PhoneTypeService().list();
            return ResponseBodyUtils.success200OkResponse(res, phoneTypes);
        } catch (error) {
            new LogEvent(LOG_LEVEL.ERROR, error.message).log();
            return ResponseBodyUtils.errorResponse(res, error);
        }
    }
}

module.exports = PhoneTypeController;