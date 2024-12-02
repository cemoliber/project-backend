const mongoose = require("mongoose");

const schema = mongoose.Schema({
    role_name: {type: String,required: true},//String,
    is_active: {type: Boolean,default: true},//String,
    created_by: {
        type: mongoose.SchemaType.ObjectId,
        required: true//created by alanı dolu olmadan bu şemaya bir şey eklenemez
    },
},{
    versionKey: false,
    //timestamps:true, mongodb'de bir şema ya da collection oluştururken createdAt ve updatedAt'i kendisi otomatik olarak çıkartıyor.
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Roles extends mongoose.Model{

}

//classı schemaya dahil ediyoruz
schema.loadClass(Roles);
module.exports = mongoose.model("roles",schema);
