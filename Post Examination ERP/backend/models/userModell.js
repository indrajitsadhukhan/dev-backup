const mongoose=require('mongoose')
// Make course code unique
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,'Please enter email'],
    },
    password_hash:{
        type: String,
        required: [true,'Please enter password']
    },
    university_id:{
        type: String,
        required: [true,'Please enter university ID'],
    },
})

module.exports=mongoose.model("User",userSchema)
