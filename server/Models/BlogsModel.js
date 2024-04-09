const mongoose = require('mongoose');

const BlogsSchema = mongoose.Schema({
    // id :  {type: Number}, 
    // _id : {type: mongoose.Types.ObjectId},
    title: { type: String, required:true},
    content: { type:String, required : true },
    image :{ type:String},
    category : { type:String, required : true },
    // authorPic : { type:String, required : true },
    author : { type:String, required : true },
    reading_time : { type:String },
    published_date : { type:Date, default : Date.now() }
//     published_date : { type:String, required : true  }
}
,{
     timestamps: true 
})

module.exports = mongoose.model("Blogs", BlogsSchema);