// Set up MySQL connection.
var mysql = require("mysql");
var connection;
require('dotenv').config();
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "lgg2gx1ha7yp2w0k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "gv9zxyslvgcyvi23",
        password: "r4wwu3r4sezmyfbj",
        database: "jx12svlufm52o8km"
    })
}


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return err;
    }
    console.log("connected as id " + connection.threadId);
});
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;