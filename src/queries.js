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

export function query(
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


