'use strict';

const express = require('express');
const fetch = require("node-fetch");

// Constants
const API_KEY = "c873d395f841c64634c5330ce9118c9d";
const PASSWORD = "5dcf9317c6ff86ea61d21b0d4dd0a1a8";
const API_URL = `https://${API_KEY}:${PASSWORD}@toolio-retail.myshopify.com/admin/api/2019-10/products.json?fields=id,title`
const PORT = 8081;
const HOST = '0.0.0.0';

// App
const app = express();

//app.get('/', )

app.get('/products', (req, res) => {
  try {
    const products = [{
      id: '1',
      title: 'some title with AWESOME'
    },
    {
      id: '2',
      title: 'some other title'
    }
    ];
    res.send(products);
  } catch (error) {
    console.log(error);
    res.send({});
  }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);