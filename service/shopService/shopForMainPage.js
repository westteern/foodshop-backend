const { Shop } = require('../../shemas/shopShemas');
const HttpError = require('../../helpers/httpError');

const createShopsList = async req => {
  const shopsList = await Shop.find();

  if (shopsList.length === 0) {
    throw HttpError(400, 'This page of shops list is empty');
  }

  const result = { shopsList };

  return result;
};

module.exports = createShopsList;
