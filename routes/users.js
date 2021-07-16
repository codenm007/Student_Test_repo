var express = require('express');
var router = express.Router();

//importing controllers
const {register_student,student_add_subjects,student_add_societies,find_students_by_class_id} = require("../controllers/students");


router.post('/register_student',register_student );

//in production following below routes should be protected


router.post('/student_add_subjects',student_add_subjects );

router.post('/student_add_societies',student_add_societies );

router.post('/find_students_by_class_id',find_students_by_class_id );

module.exports = router;
