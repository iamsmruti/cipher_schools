import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String, 
    },
    about: {
        type: String,
        default: ''
    },
    cipherMap: {
        type: Array,
        default: []
    },
    linkedin: {
        type: String,
        default: ''
    },
    github: {
        type: String,
        default: ''
    },
    twitter: {
        type: String,
        default: ''
    },
    facebook: {
        type: String,
        default: ''
    },
    instagram: {
        type: String,
        default: ''
    },
    website: {
        type: String,
        default: ''
    },
    education: {
        type: Object,
        default: {
            degree: {
                type: String,
                default: ''
            },
            role: {
                type: String,
                default: ''
            }
        }
    },
    interests: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    }
})

export default mongoose.model('User', userSchema)