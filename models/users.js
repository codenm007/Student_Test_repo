const db_schema = require("../database/index");


const schema = new db_schema(
    {
        prefix: {
          type: String
        },
        first_name: {
            type: String
          },
        last_name: {
            type: String
          },
        email: {
            type: String,
            required:true
          },
        password: {
            type: String
          },   
        mobile_no: {
            type: Number
          }, 
        reset_pass_token:{
            type:String
        },
        reset_pass_expireIn:{
            type:Number
        },
        last_login:{
            type:String
        },
        login_method:{
            type:String
        },
        is_active:{
            type:Boolean,
            default:true
        },
        sms_alerts:{
            type:Boolean
        },
        role_code: {
          type: Schema.Types.ObjectId,
          ref: "user_role",
          required: true,
        },
        city_id: {
            type: Schema.Types.ObjectId,
            ref: "cities"
          },
        country_id: {
            type: Schema.Types.ObjectId,
            ref: "countries"
          },  
        profile_pic: {
          type: String
        },
      },
      {
        timestamps: true,
      }
);

module.exports = mongoose.model("users", schema);
