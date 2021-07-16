const db_schema = require("../database/index");


const schema = new db_schema(
  {
    title: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("classes", schema);
