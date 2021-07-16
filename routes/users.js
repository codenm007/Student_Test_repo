var express = require('express');
var router = express.Router();

//importing controllers
const {register_student,student_add_subjects,student_add_societies,find_students_by_class_id,find_students_by_society} = require("../controllers/students");


router.post('/register_student',register_student );

//in production following below routes should be protected


router.post('/student_add_subjects',student_add_subjects );

router.post('/student_add_societies',student_add_societies );

//routes with aggregation queries

router.post('/find_students_by_class_id',find_students_by_class_id );

router.post('/find_students_by_society',find_students_by_society );


module.exports = router;
