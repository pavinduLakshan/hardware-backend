var express = require("express");
var router = express.Router();

const UserRouter = require("./UserRouter");
const StdRouter = require("./StudentRouter");
const HerokuRouter = require("./HerokuPingRouter");

router.use("/users", UserRouter);
router.use("/students", StdRouter);
router.use("/heroku",HerokuRouter)

module.exports = router;
