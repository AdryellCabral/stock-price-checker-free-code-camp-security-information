"use strict";
const axios = require("axios");
const { json } = require("express/lib/response");

const getPrice = (stock) => {
  axios
    .get(
      `https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${stock}/quote`
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = function (app) {
  app.route("/api/stock-prices").get(function (req, res) {
    let stock = req.query.stock;
    let like = req.query.like;
    let output = getPrice(stock);

    res.send(output);
  });
};
