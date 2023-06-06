const { Order } = require('../../shemas/orderShemas');

const createOrder = async req => {
  const orderId = await Order.create({
    ...req.body,
  });
  const result = { orderId };

  return result;
};

module.exports = createOrder;
