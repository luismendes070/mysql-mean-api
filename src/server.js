var express = require("express");
var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
//var ObjectID = mongodb.ObjectID;

const API_KEY = '17QTEYADHJ824YIWHK983IUQR2Q9W8AHKSJ9RIHWO1T8IQGEW3T7IR31GIU4';

var CONTACTS_COLLECTION = "products";

var app = express();
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'db4free.net',
  user     : 'desafiofullstack',
  password : '*5xt#AU4gtjVUsA',
  database : 'desafiodb'
});

connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'api_fullstack_challenge'
});

connection.connect();

console.log('connection connected...');

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

// CONTACTS API ROUTES BELOW
/*  "/api/products"
 *    GET: finds all products
 *    POST: creates a new products
 */

app.get("/api/products", function(req, res) {
  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/api/products", function(req, res) {
  var newContact = req.body;
  newContact.createDate = new Date();

  if (!req.body.name) {
    handleError(res, "Invalid user input", "Must provide a name.", 400);
  } else {
    db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to create new contact.");
      } else {
        res.status(201).json(doc.ops[0]);
      }
    });
  }
});

var restify = require("restify");
//curl -is http://localhost:4200/api/products -H 'accept: text/plain'

const server = restify.createServer({
  name: "products",
  version: "1.0.0",
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get("/api/:name", function (req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(4200, function () {
  console.log("%s listening at %s", server.name, server.url);
});
