const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    groupType: Number,
    userAnswers: [[Boolean]],
    selectedValue: [String]
});

const Data = module.exports = mongoose.model('Data', DataSchema);

module.exports.addData = function (newUser, callback) {
    newUser.save(callback);
};
