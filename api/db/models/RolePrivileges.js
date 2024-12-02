const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_id: {type: mongoose.SchemaTypes.ObjectId,required: true},
    permission: {type: String,default: true},
    created_by: {type: mongoose.SchemaTypes.ObjectId,required: true}
},{
    versionKey: false,
    //timestamps:true, mongodb'de bir şema ya da collection oluştururken createdAt ve updatedAt'i kendisi otomatik olarak çıkartıyor.
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class RolePrivileges extends mongoose.Model{

}

//classı schemaya dahil ediyoruz
schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privileges",schema);
