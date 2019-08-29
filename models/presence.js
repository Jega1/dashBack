var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var presenceSchema = new Schema({
      owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
      absence: [
            {comments: String },
            {
                  type: Date,
                  dateTime: new Date()
            }
            ],

      late: [
            {
             comments: String
            },
            {
            type: Date,
            dateTime: new  Date()
            }
      ]


});

module.exports = mongoose.model('presence', Schema)