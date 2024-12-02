const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: {type: String,required: true},
    password: {type: String,required: true},
    is_active: {type: Boolean,required: true},
    first_name: String,
    last_name: String,
    phone_number: String
},{
    //timestamps:true, mongodb'de bir şema ya da collection oluştururken createdAt ve updatedAt'i kendisi otomatik olarak çıkartıyor.
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Users extends mongoose.Model{

}

//classı schemaya dahil ediyoruz
schema.loadClass(Users);
module.exports = mongoose.model("users",schema);
