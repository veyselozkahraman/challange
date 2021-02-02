'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require("node-fetch");

const API_KEY = "c873d395f841c64634c5330ce9118c9d";
const PASSWORD = "5dcf9317c6ff86ea61d21b0d4dd0a1a8";
const API_URL = `https://${API_KEY}:${PASSWORD}@toolio-retail.myshopify.com/admin/api/2019-10/products.json?fields=id,title&limit=250`
const PORT = 8081;
const HOST = '0.0.0.0';


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Server is listening on port ${PORT}`)
});

app.get('/products', async (req, res) => {
  try {
    let products = [];
    let lastId = 0;
    while (true) {
      const postQuery = `&since_id=${lastId}`;
      const url = `${API_URL}${postQuery}`;
      const apiResponse = await fetch(url);
      const productsObject = await apiResponse.json();
      if (productsObject.products.length && productsObject.products.length > 0) {
        lastId = productsObject.products[productsObject.products.length - 1].id;
        products = [...products, ...productsObject.products];
      } else {
        break;
      }
    }
    res.send(products);
  } catch (error) {
    console.log(error);
    res.send({});
  }
});

app.listen(PORT, HOST);