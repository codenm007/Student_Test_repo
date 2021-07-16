const db_schema = require("../database/index");


const schema = new db_schema(
  {
    role: {
      type: String,
      required: true,
    },
    role_code: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user_role", schema);
