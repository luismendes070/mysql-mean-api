const API_KEY = "17QTEYADHJ824YIWHK983IUQR2Q9W8AHKSJ9RIHWO1T8IQGEW3T7IR31GIU4";

var PRODUCTS_COLLECTION = "products";

var app = express();
// app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
// app.use(bodyParser.urlencoded({ extended: false }));

import {getRepository} from "typeorm";

const user = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: 1 })
    .getOne();

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

var mysql = require("mysql");
var connectionDb4free = mysql.createConnection({
  host: "db4free.net",
  user: "desafiofullstack",
  password: "*5xt#AU4gtjVUsA",
  database: "desafiodb",
});

var connectionLocalhost = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api_fullstack_challenge",
});

connectionLocalhost.connect();

console.log("connection connected...");

connectionLocalhost.query("select version()", function (error, results, fields) {
  if (error) throw error;
  console.log("MySQL Version: ", results[0].solution);
});

connectionLocalhost.query("select * from products", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connectionLocalhost.query("select * from jsonproducts", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

function query(
  query
) {
  
  connectionLocalhost.connect();

  return connectionLocalhost.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
  });
  
  connectionLocalhost.end();
}

connectionLocalhost.end();

// CONTACTS API ROUTES BELOW
/*  "/api/products"
 *    GET: finds all products
 *    POST: creates a new products
 */

app.get("/api/products", function (req, res) {
  db.collection(PRODUCTS_COLLECTION)
    .find({})
    .toArray(function (err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get contacts.");
      } else {
        res.status(200).json(docs);
      }
    });
});

app.post("/api/products", function (req, res) {
  var newProduct = req.body;
  //newProduct.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(PRODUCTS_COLLECTION).insertOne(newProduct, function (
      err,
      doc
    ) {
      if (err) {
        handleError(res, err.message, "Failed to create new product.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});
