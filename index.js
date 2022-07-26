import express from "express";
import { products } from "./data.js";

const app = express();
const port = 8081;

app.use(express.json());

// let products = [
//   {
//     productName: "",
//     quantity: "",
//     unitPrice: "",
//     statum: "",
//     category: "",
//   },
// ];

// app.post("/api/products", (req, res) => {
//   console.log(req.body);
//   return;
// });

app.post("/api/products", (req, res) => {
  //   const { productName, quantity, unitPrice, statum, category } = req.body;
  products.push(req.body);
  console.log(req.body);

  res.status(200).send({
    message: "Product Added",
    data: products,
  });
});

app.get("/api/getAll", (req, res) => {
  res.status(200).send({
    message: "Products fetched Successfuly",
    data: products,
  });
});

app.listen(port, () => {
  console.log("Hi");
});
