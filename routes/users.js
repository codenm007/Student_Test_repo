var express = require('express');
var router = express.Router();

//importing controllers
const {register_student,student_add_subjects} = require("../controllers/students");


router.post('/register_student',register_student );
router.post('/student_add_subjects',student_add_subjects );


module.exports = router;
