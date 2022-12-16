const mongoose=require('mongoose')
// Make course code unique
const courseSchema = new mongoose.Schema({
    code:{
        type: String,
        required: [true,'Please enter course code'],
    },
    name:{
        type: String,
        required: [true,'Please enter course name']
    },
    instructor:{
        type: String,
        required: [true,'Please enter course instructor']
    },
})

module.exports=mongoose.model("Course",courseSchema)
