const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    id: Number,
    answer: [{
        qid: Number,
        uas: [String],
    }],

});

const Data = module.exports = mongoose.model('Data', DataSchema);

module.exports.addData = function (newUser, callback) {
    newUser.save(callback);
};
