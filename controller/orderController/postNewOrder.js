const createOrder = require('../../service/orderService/createOrder');

const postNewOrder = async (req, res) => {
  const result = await createOrder(req);
  res.json({
    status: 'created',
    code: 201,
    result,
  });
};

module.exports = postNewOrder;
