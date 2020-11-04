const API_KEY = "17QTEYADHJ824YIWHK983IUQR2Q9W8AHKSJ9RIHWO1T8IQGEW3T7IR31GIU4";

var CONTACTS_COLLECTION = "products";

var app = express();
// app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
// app.use(bodyParser.urlencoded({ extended: false }));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "db4free.net",
  user: "desafiofullstack",
  password: "*5xt#AU4gtjVUsA",
  database: "desafiodb",
});

connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "api_fullstack_challenge",
});

connection.connect();

console.log("connection connected...");

connection.query("select version()", function (error, results, fields) {
  if (error) throw error;
  console.log("MySQL Version: ", results[0].solution);
});

connection.query("select * from products", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();

// CONTACTS API ROUTES BELOW
/*  "/api/products"
 *    GET: finds all products
 *    POST: creates a new products
 */

app.get("/api/products", function (req, res) {
  db.collection(CONTACTS_COLLECTION)
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
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(CONTACTS_COLLECTION).insertOne(newContact, function (
      err,
      doc
    ) {
      if (err) {
        handleError(res, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});
