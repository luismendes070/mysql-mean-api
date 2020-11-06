const API_KEY = "17QTEYADHJ824YIWHK983IUQR2Q9W8AHKSJ9RIHWO1T8IQGEW3T7IR31GIU4";

var PRODUCTS_COLLECTION = "products";

var app = express();
// app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
// app.use(bodyParser.urlencoded({ extended: false }));

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
