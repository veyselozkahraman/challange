'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require("node-fetch");

const API_KEY = "c873d395f841c64634c5330ce9118c9d";
const PASSWORD = "5dcf9317c6ff86ea61d21b0d4dd0a1a8";
const API_URL = `https://${API_KEY}:${PASSWORD}@toolio-retail.myshopify.com/admin/api/2019-10/products.json?fields=id,title`
const PORT = 8081;
const HOST = '0.0.0.0';


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`Server is listening on port ${PORT}`)
});

app.get('/products', (req, res) => {
  try {
    fetch(API_URL).then(response => response.json()).then(productsObject => {
      res.send(productsObject.products);
    });
  } catch (error) {
    console.log(error);
    res.send({});
  }
});

app.listen(PORT, HOST);