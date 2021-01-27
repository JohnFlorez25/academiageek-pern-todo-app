const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Flore$0225",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;