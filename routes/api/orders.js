const express = require('express');

const validateBody = require('../../helpers/validateBody');
const postNewOrder = require('../../controller/orderController/postNewOrder');
const orderValidationSchema = require('../../middelware/validation/createOrderValidation');

const router = express.Router();

router.post('/', validateBody(orderValidationSchema), postNewOrder);

module.exports = router;
