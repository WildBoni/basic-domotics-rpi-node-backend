const express = require("express");

const RouteController = require("../controllers/routes");

const router = express.Router();

router.get("",  RouteController.getData);

module.exports = router;
