const db_schema = require("../database/index");


const schema = new db_schema(
  {
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
    class_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
    subject_ids: {
        type: [Schema.Types.ObjectId],
        ref: "subjects"
      },
    society_ids: {
        type: [Schema.Types.ObjectId],
        ref: "subjects"
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("students", schema);
