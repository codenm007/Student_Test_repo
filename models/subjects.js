const db_schema = require("../database/index");


const schema = new db_schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true,
      },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("subjects", schema);
