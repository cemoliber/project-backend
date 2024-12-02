const mongoose = require("mongoose");

const schema = mongoose.Schema({
    is_active: {type: Boolean,default: true},
    created_by: {type: mongoose.SchemaTypes.ObjectId,required: true}
},{
    versionKey: false,
    //timestamps:true, mongodb'de bir şema ya da collection oluştururken createdAt ve updatedAt'i kendisi otomatik olarak çıkartıyor.
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Categories extends mongoose.Model{

}

//classı schemaya dahil ediyoruz
schema.loadClass(Categories);
module.exports = mongoose.model("categories",schema);
