const express = require("express");

const RouteController = require("../controllers/routes");

const router = express.Router();

router.get("/on",  RouteController.lightOn);
router.get("/off",  RouteController.lightOff);
router.get("/pirOn",  RouteController.pirOn);
router.get("/pirOff",  RouteController.pirOff);
module.exports = router;
