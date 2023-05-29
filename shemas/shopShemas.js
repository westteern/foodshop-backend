const { Schema, model } = require('mongoose');

const addressShopSchema = new Schema(
  {
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const shopSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    address: {
      type: [addressShopSchema],
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = model('shop', shopSchema);

module.exports = { Shop };
