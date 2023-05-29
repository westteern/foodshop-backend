const express = require('express');
const router = express.Router();

const {
  getShopsList,
} = require('../../controller/shopsController/getShopsList');

router.get('/', getShopsList);

module.exports = router;
