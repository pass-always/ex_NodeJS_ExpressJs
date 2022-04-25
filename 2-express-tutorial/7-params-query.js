const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    // If you return 'product', you will get the original
    return { id, name, image };
  });
  res.json(newProducts);
});

// app.get("/api/products/:productID", (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1);
//   res.json(singleProduct);
// });

// :productID in the url will present the dynamic ID. I do not need to hard code to input the ID
app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }
  console.log(singleProduct);
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  // [] is delaring an array. {} is an object
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200),send('no product matched your search');
    // If no 'return', there be an error in your server side.
    return res.status(200).json({ sucess: true, data: {} });
  }
  // If there are following codes after this, you still need to add 'return'
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000 ...");
});
