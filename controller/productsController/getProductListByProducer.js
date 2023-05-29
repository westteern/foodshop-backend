const ctrlWrapper = require('../../helpers/ctrlWraper');
const createProductListByProducer = require('../../service/productService/productByProducer');

const getProductListByProducer = async (req, res) => {
  const productListByProducer = await createProductListByProducer(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: productListByProducer,
    },
  });
};

module.exports = {
  getProductListByProducer: ctrlWrapper(getProductListByProducer),
};
