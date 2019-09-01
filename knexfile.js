module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/project-manager.db3'
    }
  },
  mirgrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  pool: {
    afterCreate : (conn, done) => {
      conn.run('PRAGMA foregn_keys = ON', done)
    }
  },


};
