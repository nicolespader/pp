const { Router } = require("express");
const router = Router();
const { storeUser } = require("../controller/usersController");

router.post("/store/user", storeUser);

module.exports = router;