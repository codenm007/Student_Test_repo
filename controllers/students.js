//importing models
const users = require("../models/users");
const student = require("../models/students");
//add students

const register_student = async (req, res, next) => {
  const data = JSON.parse(JSON.stringify(req.body));
  //console.log( data);
    //checking if the user is already preseent or not 
    console.log(data.email)
  users.find({email:data.email}).then(()=>{
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

module.exports = {
    register_student,
};
