var express = require('express');
const apiRoutes = express.Router();

var FPTController = require('../controllers/FPTController.js');

// authenticated routes
apiRoutes.get('/', function (req, res) {
  res.status(201).json({ message: 'Welcome to the authenticated routes!' });
});

// -------------- FPT Oracle ----------------
apiRoutes.get('/tables/', FPTController.getTableList);
apiRoutes.get('/getTable/:tid', FPTController.getTable);
apiRoutes.get('/totalCuriosities/', FPTController.totalCuriosities);
apiRoutes.get('/FPGAtypeo/', FPTController.FPGAtypeo);
apiRoutes.get('/GetEffiency/', FPTController.GetEffiency);
apiRoutes.get('/totalRCES/', FPTController.totalRCES);
apiRoutes.get('/getMaxTemperature/', FPTController.getMaxTemperature);
apiRoutes.get('/DeleteFPGAS/', FPTController.DeleteFPGAS);
apiRoutes.get('/UPDATEearth/', FPTController.UPDATEearth);
apiRoutes.get('/AvgPressure/', FPTController.AvgPressure);
apiRoutes.get('/GetMaxTemp/', FPTController.GetMaxTemp);
apiRoutes.get('/addcuriosity/', FPTController.addcuriosity);
apiRoutes.get('/MarsOrbiterbeforeinsert/', FPTController.MarsOrbiterbeforeinsert);
apiRoutes.get('/Curiositybeforeupdate/', FPTController.Curiositybeforeupdate);
apiRoutes.get('/APXSbeforedelete/', FPTController.APXSbeforedelete);
module.exports = apiRoutes;