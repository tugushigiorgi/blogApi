const router = require("express").Router();
const postcontroller=require("../controllers/PostConctroller");
const  validatepost=require("../middleware/validatePostCreation");
const authentication=require("../middleware/verifyToken");


router.post("/add",[authentication,validatepost],postcontroller.createpost);



