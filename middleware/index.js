import { products } from "../data.js";

const checkIfProductExist = (req, res, next) => {
  const product = products.find((item) => item.id == req.params.prodId);
  if (!product) {
    res.status(404).send({
      message: "Product not in store.",
      data: null,
    });
  }
  req.product = product;
  next();
};

export { checkIfProductExist };
