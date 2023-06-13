const mongoose = require("mongoose")

const testimonialSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    testimonial: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

mongoose.models = {}
module.exports = mongoose.model("Testimonials", testimonialSchema) 