const { Product } = require('../../shemas/productShema');
const HttpError = require('../../helpers/httpError');

const createProductListByProducer = async req => {
  const { producerId } = req.params;

  const productListByProducer = await Product.find({ produser: producerId });

  if (productListByProducer.length === 0) {
    throw HttpError(400, 'This page of product list is empty');
  }

  const result = { productListByProducer };

  return result;
};

module.exports = createProductListByProducer;
