var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "root", "");

var tblProduct = sequelize.define("jsonproducts", {
    title: Sequelize.STRING,
    type:Sequelize.STRING,
    description:Sequelize.STRING,
    filename:Sequelize.STRING,
    height:Sequelize.STRING,
    width:Sequelize.NUMBER,
    price:Sequelize.NUMBER,
    rating: Sequelize.NUMBER,
    product_id: Sequelize.NUMBER,
});

import { Product } from "./product";

export function add(p:any:Product) {
    sequelize
      .sync()
      .then(function () {
        return tblProduct.create(p);
      })
      .then(function (p.title) {
        console.log(
          p.title.get({
            plain: true,
          })
        );
      });
}

module.exports = {
    sequelize: sequelize,
    JsonProduct: tblProduct
};


