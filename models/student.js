var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
        name: String,
        email: String,
        password: String,
        classe: String,
        telephone: Number     
       
});

 module.exports = mongoose.model('student', studentSchema, 'students_dev')