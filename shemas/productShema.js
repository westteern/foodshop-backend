const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    producer: {
      type: {
        type: Schema.Types.ObjectId,
        ref: 'shop',
        required: true,
      },
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model('product', productSchema);

module.exports = { Product };
