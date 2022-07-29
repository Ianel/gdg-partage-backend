const express = require("express");
const router = express.Router();
const sharingRoutes = require("../controllers/sharing.controller");

router
  .route("/")
  .get(sharingRoutes.findAllSharing)
  .post(sharingRoutes.addNewSharing);

router.route("/:id").get(sharingRoutes.findASharing);

module.exports = router;
