const mongoose=require('mongoose')
const programmeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,'Please enter programme name']
    },
    startDate:{
        type: String,
        required: [true,'Please enter programme start Date']
    },
    currentSem:{
        type: String,
        required: [true,'Please enter current semester']
    },
    totalSem:{
        type: String,
        required: [true,'Please enter total semester']
    },
    cgpa:{
        type: String,
        required: [true,'Please enter cgpa']
    }
})

module.exports=mongoose.model("Programme",programmeSchema)
