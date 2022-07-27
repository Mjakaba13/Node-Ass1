import express from "express";
// import { products } from "./data.js";
import productRoutes from "./Routes/index.js";
const app = express();
const port = 8081;

app.use(express.json());

app.use(productRoutes);

app.listen(port, () => {
  console.log("Hi");
});

export default app;
