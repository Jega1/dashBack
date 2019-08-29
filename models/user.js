const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
        name: String,
        email: String,
        password: String,
        class: String,
        status: String
})
//here user is the file user.js, userSchema is above, 'user_promo is collection of mongoDB'
module.exports = mongoose.model('User', userSchema, 'user_promo')

//for students
