const Pool = require("pg").Pool;
const Knex = require('knex');

const createUnixSocketPool = config => {
  const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

  // Establish a connection to the database
  return Knex({
    client: 'pg',
    connection: {
      user: "postgres", // e.g. 'my-user'
      password: "Flore$0225", // e.g. 'my-user-password'
      database: "perntodo", // e.g. 'my-database'
      host: `${dbSocketPath}/pern-compute-engine:us-central1:pern-bd`,
    },
    // ... Specify additional properties here.
    ...config,
  });
};

const createPool = () => {

  const config = {pool: {}};

  config.pool.max = 5;

  config.pool.min = 5;

  config.pool.acquireTimeoutMillis = 60000; 

  config.createTimeoutMillis = 30000; 

  config.idleTimeoutMillis = 600000; 

  config.createRetryIntervalMillis = 200; // 0.2 seconds
  // [END cloud_sql_postgres_knex_backoff]

    return createUnixSocketPool(config);
};

module.exports = createPool;