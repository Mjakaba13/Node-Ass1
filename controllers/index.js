import { products } from "../data.js";

export const getSingleProduct = (req, res) => {
  res.status(200).send({
    message: "This is the product.",
    data: req.product,
  });
};

export const getAllProducts = (req, res) => {
  res.status(200).send({
    message: "These are the products in the store.",
    data: products,
  });
};

export const changeProduct = (req, res) => {
  const { product } = req;
  const data = req.body;
  //   console.log(data);
  //   console.log(product);

  if (data.productName) {
    product.productName = data.productName;
  }
  if (data.quantity) {
    product.quantity = data.quantity;
  }
  if (data.unitPrice) {
    product.unitPrice = data.unitPrice;
  }
  if (data.status) {
    product.status = data.status;
  }
  if (data.category) {
    product.category = data.category;
  }

  return res.status(200).send({
    message: "Product updated.",
    data: product,
  });
};

export const addProducts = (req, res) => {
  const { productName, quantity, unitPrice, status, category } = req.body;
  const prodId = Math.floor(Math.random() * 100);
  products.push({
    id: prodId,
    productName,
    quantity,
    unitPrice,
    status,
    category,
  });
  res.status(201).send({
    message: "Product successfully added",
    data: products,
  });
};
