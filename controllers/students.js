const mongoose = require("mongoose")
//importing models
const users = require("../models/users");
const student = require("../models/students");

//add students

const register_student = async (req, res, next) => {
  const data = JSON.parse(JSON.stringify(req.body));
  //console.log( data);
    //checking if the user is already preseent or not 
    console.log(data.email)
  users.find({email:data.email}).then((data)=>{
      console.log(data);
      res.status(200).json({
          status:200,
          message:"User already present"
      })
  }).catch(()=>{
    const new_user = new users(data);

    new_user
      .save()
      .then((user_data) => {
        //adding the user to student db
        const new_student = new student({
            user_id:user_data._id,
            class_id:data.class_id
        });
        new_student.save()
        .then(()=>{
            res.status(200).json({
                status: 200,
                message: "Student registered successfully !",
              });
        })
        .catch(err =>{
            console.loog(err);
        })

      })
      .catch((err) => {
        console.log(err);
      });
  })

};

const student_add_subjects = async(req,res,next) => {
    const data = req.body;
    console.log(data)
    student.update({"user_id":`${data.user_id}`},{$push :{"subject_ids": data.subject_id}}).then(response =>{
        console.log(response)
        res.status(200).json({
            status:200,
            message:"Subject added successfully!"
        })
    }).catch(err =>{
        console.log(err);
    })
}

const student_add_societies = async(req,res,next) => {
    const data = req.body;
    console.log(data)
    student.update({"user_id":`${data.user_id}`},{$push :{"society_ids": data.society_ids}}).then(response =>{
        console.log(response)
        res.status(200).json({
            status:200,
            message:"Society added successfully!"
        })
    }).catch(err =>{
        console.log(err);
    })
}



//aggregation queries
const find_students_by_class_id = async(req,res,next) =>{

    let data = req.body;

    let class_id = mongoose.Types.ObjectId(data.class_id);

    student.aggregate([
        {$match: {class_id:class_id}},
        {$group: {_id: "$user_id"}},
        {$sort: {total: -1}} //sorting in descending order
    ]).then(data =>{
        console.log(data);
        res.status(200).json({
            status:200,
            message:"students fetched successfully",
            data:data
        })
    }).catch(err=>{
        console.log(err);
    })
}

module.exports = {
    register_student,
    student_add_subjects,
    student_add_societies,
    find_students_by_class_id
};
