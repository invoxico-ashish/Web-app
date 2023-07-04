const sql = require("mysql");

const sqlConnect = sql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "users_react",
    multipleStatements: true
});

sqlConnect.connect((err) => {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log(err);
    }
});

module.exports = sqlConnect;

