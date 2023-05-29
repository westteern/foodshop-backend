const ctrlWrapper = require('../../helpers/ctrlWraper');
const createShopsList = require('../../service/shopService/shopForMainPage');

const getShopsList = async (req, res) => {
  const shopList = await createShopsList(req);
  res.json({
    status: 'success',
    code: 200,
    result: {
      data: shopList,
    },
  });
};

module.exports = { getShopsList: ctrlWrapper(getShopsList) };
