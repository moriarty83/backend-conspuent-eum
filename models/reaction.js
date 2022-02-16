const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reactionSchema = mongoose.Schema({
    instructor: {
        type: String
    },
    courseNumber: {
        type: Number
    },

    sectionNumber: {
        type: Number
    },

    title:{
        type: String
    },

    vimeoUrl: {
        type: String
    },

    category: {
        type: String
    }
})

const Reaction = mongoose.model('Reaction', reactionSchema)
module.exports = Reaction