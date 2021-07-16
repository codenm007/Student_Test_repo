const db_schema = require("../database/index");


const schema = new db_schema(
  {
    title: {
      type: String,
      required: true,
    },
    short_code:{
        type:String
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("countries", schema);
