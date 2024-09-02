const mongoose = require('mongoose')


const modelSchema = new mongoose.Schema
({

    name: 
    {
        type: String,
        required: true
    },
    tech: 
    {
        type: String,
        required: true
    },
    sub: 
   {
        type: Boolean,
        required: true,
        default: false
    },
    rollno:
    {
        type: Number,
        required: true
    },
    year:
    {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Model',modelSchema)
