const { Schema, model } = require('mongoose');

const orderListShema = new Schema(
  {
    products: [
      {
        _id: {
          type: Schema.Types.ObjectId,
          ref: 'product',
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);
const costumerShema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userPhone: {
      type: Number,
      required: true,
    },
    userAddress: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const orderSchema = new Schema(
  {
    orderList: {
      type: orderListShema,
      required: true,
    },
    costumer: {
      type: costumerShema,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = model('order', orderSchema);

module.exports = { Order };
