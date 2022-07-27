import { Router } from "express";
import {
  addProducts,
  changeProduct,
  getAllProducts,
  getSingleProduct,
} from "../controllers/index.js";
import { checkIfProductExist } from "../middleware/index.js";
import { productSchema } from "../middleware/validation.js";

const router = Router();
router.post(
  "/api/products",
  (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    if (error) {
      return res.status(400).send({
        error,
      });
    }
    next();
  },
  addProducts
);

router.get("/api/getAll", getAllProducts);

router.get("/api/product/:prodId", checkIfProductExist, getSingleProduct);

router.put("/api/product/:prodId", checkIfProductExist, changeProduct);

export default router;
