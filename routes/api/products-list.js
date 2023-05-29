const express = require('express');
const router = express.Router();

const {
  getProductListByProducer,
} = require('../../controller/productsController/getProductListByProducer');

router.get('/:producer', getProductListByProducer);

module.exports = router;
