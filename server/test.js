var Oracledb = require('oracledb');
var config = require('./config');



function getEmployee(x) {
  table= x
  return new Promise(async function (resolve, reject) {
    let conn;

    try {
      conn = await Oracledb.getConnection({
        user: config.user,
        password: config.password,
        connectString: config.connectString
      });

      let result = await conn.execute(
        `select *
        from :table`,
        [table="Earth"],
      );
      resolve(result);

    } catch (err) { // catches errors in getConnection and the query
      reject(err);
    } finally {
      if (conn) {   // the conn assignment worked, must release
        try {
          await conn.release();
        } catch (e) {
          console.error(e);
        }
      }
    }
  });
}

async function run() {
  try {
    let res = await getEmployee("Earth");
    console.log(res.rows);
  } catch (err) {
    console.error(err);
  }
}


run();
