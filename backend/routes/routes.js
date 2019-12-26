const express = require("express");

const RouteController = require("../controllers/routes");

const router = express.Router();

router.get("/on",  RouteController.lightOn);
router.get("/off",  RouteController.lightOff);

module.exports = router;
