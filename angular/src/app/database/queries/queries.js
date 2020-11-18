// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;
private var connection;

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

function setConnection(host:string, user:string, passsword:string, database:string){
    
    connection = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

}

function getConnection(){
    return connection;
}

// await connectionLocalhost.connect();

// console.log("connection connected...");



//async await fetch then then

export async function query(query:var, conection:var) {
  
  connection.connect();

  return connection.query(query, function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
  });
  
  // connectionLocalhost.end();
}

// connectionLocalhost.end();


