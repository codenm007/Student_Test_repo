const mongoose = require("mongoose");
const db_schema = require("../database/index");

const schema = new db_schema(
  {
    user_id: {
        type: db_schema.Types.ObjectId,
        ref: "users"
      },
    class_id: {
        type: db_schema.Types.ObjectId,
        ref: "users"
      },
    subject_ids: {
        type: [db_schema.Types.ObjectId],
        ref: "subjects"
      },
    society_ids: {
        type: [db_schema.Types.ObjectId],
        ref: "subjects"
      },
  },
  {
    timestamps: true,
  }
);

const student =  mongoose.model("student", schema);

module.exports = student;
