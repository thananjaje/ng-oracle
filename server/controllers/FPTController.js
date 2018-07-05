var oracledb = require('oracledb');
var config = require('../config');


exports.getTableList = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`SELECT *
         		 FROM tab`,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.totalCuriosities = function (req, res, next) {
	Oracledb.getConnection(
		{
			user: "jaje",
			password: "user123",
			connectString: "localhost/xe"
		})
		.then(function (conn) {
			return conn.execute(
				`CREATE OR REPLACE FUNCTION totalCuriosities
			RETURN number IS
			  total number(2) := 0;
			BEGIN
			  SELECT COUNT(*) into total
			  FROM Curiosity; 
			  
			  RETURN total;
			END;
			/
			SET SERVEROUTPUT ON;
			DECLARE
			
			   tc number(2);
			
			BEGIN
			   
			   dbms_output.put_line('Total no. of Curiosities: '||totalCuriosities());
			 
			   
			END;
			`,
				[110]  // bind value for :id
			)
				.then(function (result) {
					console.log(result.rows);
					return conn.close();
				})
				.catch(function (err) {
					console.error(err);
					return conn.close();
				});
		})
		.catch(function (err) {
			console.error(err);
		});

}

exports.FPGAtypeo = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`SELECT * FROM table(get_FPGA_list('FPG7700'))
        `,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: [["NO_OF_GATES", "PROCESSOR"], result.rows]
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.GetEffiency = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE OR REPLACE FUNCTION GetEffiency(
					HR_ID IN CHAR
				)
				RETURN number IS
					Eff number := 0;
				BEGIN
					SELECT Efficency into Eff
					FROM HRS H
					WHERE H.HID  = HR_ID;
					
					RETURN Eff;
				END;
				/
				
				SET SERVEROUTPUT ON;
				DECLARE
				   HR_ID  HRS.HID%type :='HRS9000';
				   HC number;
				
				BEGIN
				   HC:=GetEffiency(HR_ID);
				   dbms_output.put_line('Efficency: '||HC);
				 
				   
				END;
				 `,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.totalRCES = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE OR REPLACE FUNCTION totalRCES(
					C_S IN number
				)
				RETURN number IS
					total number(2) := 0;
				BEGIN
					SELECT COUNT(*) into total
					FROM  RCE
					WHERE ClockSpeed = C_S; 
					
					RETURN total;
				END;
				/
				SET SERVEROUTPUT ON;
				DECLARE
				   
				   CS  RCE.ClockSpeed%type :='300.00';
				   tr number(2);
				
				BEGIN
				   tr:=totalRCES(CS);
				   dbms_output.put_line('Total no. of RCES: '||tr);
				 
				   
				END;`,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.getMaxTemperature = function (req, res, next) {
	Oracledb.getConnection(
		{
			user: "jaje",
			password: "user123",
			connectString: "localhost/xe"
		})
		.then(function (conn) {
			return conn.execute(
				`CREATE OR REPLACE FUNCTION getMaxTemperature
			RETURN number IS
				C_Heat number;
			BEGIN
				SELECT Max(Heat) into C_Heat
				FROM ThermalSystem;
				
				RETURN C_Heat;
			END;
			/
			SET SERVEROUTPUT ON;
			DECLARE
			
			   th number;
			
			BEGIN
			   th:=getMaxTemperature();
			   dbms_output.put_line('Max Temperature: '||th);
			 
			   
			END;
			`,
				[110]  // bind value for :id
			)
				.then(function (result) {
					console.log(result.rows);
					return conn.close();
				})
				.catch(function (err) {
					console.error(err);
					return conn.close();
				});
		})
		.catch(function (err) {
			console.error(err);
		});

}

exports.DeleteFPGAS = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE PROCEDURE Delete_FPGAS(FPGA_ID CHAR) AS 

				Total_FPGA NUMBER;
			
			BEGIN	
				DELETE FROM FPGAS
				WHERE FPGAS.FPGAS_ID=Delete_FPGAS.FPGA_ID;
				
				SELECT count(*) INTO Total_FPGA
				FROM FPGAS;
				
				Total_FPGA:=Total_FPGA ;
				dbms_output.put_line('No of FPGAS after delete: '||Total_FPGA);
			End;
        `,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.UPDATEearth = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE OR REPLACE PROCEDURE UPDATEearth (   
					p_location IN Earth.Earthlocation%TYPE,  
					p_speed IN Earth.OrbitalSpeed%TYPE,  
					p_heat IN Earth.Heat%TYPE,
					p_meandensity IN Earth.MeanDensity%TYPE,
					p_volume IN Earth.Volume%TYPE)
					  
					IS  
					
					BEGIN 
					 
					UPDATE Earth SET EarthLocation=p_location, OrbitalSpeed=p_speed, Heat=p_heat, MeanDensity=p_meandensity,Volume=p_volume 
					WHERE EarthLocation=p_location;
					  
					COMMIT;
					  
					END;
					/
					
					SET SERVEROUTPUT ON;
					EXECUTE UPDATEearth();
				 `,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.AvgPressure = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE OR REPLACE PROCEDURE Avg_Pressure(C_ID CHAR) 
				AS
				   avg_pressure  NUMBER := 0;
				BEGIN
					 SELECT CuriosityID,AVG(Pressure)
					 INTO C_ID,avg_pressure
					 FROM ThermalSystem
					 GROUP BY CuriosityID=C_ID;
					
				   DBMS_OUTPUT.put_line (avg_pressure);	
				   
				EXCEPTION
				   WHEN NO_DATA_FOUND
				   THEN
					  DBMS_OUTPUT.put_line ('No Data');
				END;
				/
				
				DROP PROCEDURE Avg_Pressure;  `,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.GetMaxTemp = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE OR REPLACE PROCEDURE GetMaxTemp
				IS
				
					C_Heat NUMBER := 0;
				
				BEGIN
				
					SELECT Max(Heat) INTO C_Heat
					FROM ThermalSystem;
				
					DBMS_OUTPUT.put_line(C_Heat);
				
					EXCEPTION 
					WHEN NO_DATA_FOUND
					THEN
					DBMS_OUTPUT.put_line('No Data Found');
				
				END;
				 `,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.addcuriosity = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE OR REPLACE PROCEDURE add_curiosity 
				(	
					p_curiosityID IN Curiosity.CuriosityID%TYPE,  
				
					p_mass IN Curiosity.Mass%TYPE,  
				
					p_clong IN Curiosity.CLong%TYPE,
					p_width IN Curiosity.width%TYPE,
					p_distance IN Curiosity.distance%TYPE,
					p_earthlocation IN Curiosity.EarthLocation%TYPE,
					p_ritg IN Curiosity.RITG_ID%TYPE
				)  
				
				IS  
				
				BEGIN
				  INSERT INTO Curiosity (CuriosityID, Mass, CLong, width, distance, EarthLocation, RITG_ID) 
				VALUES(
				p_curiosityID, p_mass, p_clong, p_width, p_distance, p_earthlocation, p_ritg);
				
				 
				END;
				/
				
				INSERT INTO Curiosity VALUES  ('CUR2008', 205, 305, 405, 505, 'ERL1001', 'RDI1002' );`,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.MarsOrbiterbeforeinsert = function (req, res, next) {
	Oracledb.getConnection(
		{
			user: "jaje",
			password: "user123",
			connectString: "localhost/xe"
		})
		.then(function (conn) {
			return conn.execute(
				`CREATE OR REPLACE TRIGGER MarsOrbiter_before_insert
			BEFORE INSERT
			   ON MarsOrbiter
			   FOR EACH ROW
			
			DECLARE
			BEGIN
				IF (:new.activedays < 100) THEN
				  RAISE_APPLICATION_ERROR(-20000,'ActiveDays must be greater than 100 Days.');
				END IF;      
			
			END;
			/
			
			INSERT INTO MarsOrbiter VALUES  ('AOB4004' ,'ERL1001','18-SEPTEMBER-2019' , 18);
			
			DROP TRIGGER MarsOrbiter_before_insert;
			`,
				[110]  // bind value for :id
			)
				.then(function (result) {
					console.log(result.rows);
					return conn.close();
				})
				.catch(function (err) {
					console.error(err);
					return conn.close();
				});
		})
		.catch(function (err) {
			console.error(err);
		});

}

exports.Curiositybeforeupdate = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE OR REPLACE TRIGGER Curiosity_before_update
				BEFORE UPDATE
				   ON Curiosity
				   FOR EACH ROW
				
				DECLARE
				BEGIN
					IF (:new.Mass < 100) THEN
					  RAISE_APPLICATION_ERROR(-20000,'Mass must be greater than 100 Kg.');
					END IF;      
				
					IF (:new.distance < 10) THEN
					  RAISE_APPLICATION_ERROR(-20000,'Distance must be greater than 10Km.');
					END IF;
				END;
				/
				
				UPDATE Curiosity SET distance = 2 where CuriosityID = 'CUR2000';        `,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}

exports.APXSbeforedelete = function (req, res, next) {
	oracledb.getConnection(
		{
			user: config.user,
			password: config.password,
			connectString: config.connectString
		},
		function (err, connection) {
			if (err) {
				console.error(err.message);
				return;
			}
			connection.execute(
				`CREATE OR REPLACE TRIGGER APXS_before_delete
				BEFORE DELETE
				   ON APXS
				   FOR EACH ROW
				
				DECLARE
				BEGIN
					IF (:OLD.temp > 100) THEN
					  RAISE_APPLICATION_ERROR(-20000,'Temperature must be greater than 100.');
					END IF;      
				
					IF (:OLD.no_of_gates > 10) THEN
					  RAISE_APPLICATION_ERROR(-20000,'no_of_gates must be less than 3.');
					END IF;
				END;
				/
				INSERT INTO APXS VALUES  ('SPM8815' ,200 ,10 ,2);
				DELETE FROM APXS where SP_ID = 'SPM8815';
				DROP TRIGGER APXS_before_delete;
				 `,
				function (err, result) {
					if (err) {
						console.error(err.message);
						doRelease(connection);
						return;
					}
					// console.log(result.rows);
					doRelease(connection);
					// resArr = result.rows;
					res.status(201).json({
						success: true,
						data: result.rows
					});
					console.log(result.rows);
				});
		});

	function doRelease(connection) {
		connection.close(
			function (err) {
				if (err)
					console.error(err.message);
			});
	}

}