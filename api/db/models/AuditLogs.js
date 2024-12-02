const mongoose = require("mongoose");

const schema = mongoose.Schema({
    level:String,
    email: String,
    location: String,
    proc_type: String,
    log: String,
},{
    versionKey: false,
    //timestamps:true, mongodb'de bir şema ya da collection oluştururken createdAt ve updatedAt'i kendisi otomatik olarak çıkartıyor.
    timestamps:{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class AuditLogs extends mongoose.Model{

}

//classı schemaya dahil ediyoruz
schema.loadClass(AuditLogs);
module.exports = mongoose.model("audit_logs",schema);
