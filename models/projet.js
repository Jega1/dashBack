
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projetSchema = new Schema({
      owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
      name: String,
      note: Number,
      comment: String,
      date: {
            type: Date,
            default: new Date()
      }
});

module.exports = mongoose.model('projet', projetSchema)