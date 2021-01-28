const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "faber123",
    host: "35.226.85.125",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;
