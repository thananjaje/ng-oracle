var Oracledb = require('oracledb');
var config = require('./config');



function getEmployee() {
  return new Promise(async function (resolve, reject) {
    let conn;

    try {
      conn = await Oracledb.getConnection({
        user: config.user,
        password: config.password,
        connectString: config.connectString
      });

      let result = await conn.execute(
        `CREATE OR REPLACE PROCEDURE Avg_Pressure(C_ID CHAR) 
        AS
           avg_pressure  NUMBER := 0/
        BEGIN
             SELECT CuriosityID,AVG(Pressure)
             INTO C_ID,avg_pressure
             FROM ThermalSystem
           GROUP BY CuriosityID=C_ID/
          
           DBMS_OUTPUT.put_line (avg_pressure)/
           
        EXCEPTION
           WHEN NO_DATA_FOUND
           THEN
              DBMS_OUTPUT.put_line ('No Data')/
        END
        /
        
        DROP PROCEDURE Avg_Pressure/
        `
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
    let res = await getEmployee();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}


run();