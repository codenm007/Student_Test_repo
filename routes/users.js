var express = require('express');
var router = express.Router();

//importing controllers
const {register_student} = require("../controllers/students");


router.post('/register_student',register_student );

module.exports = router;
