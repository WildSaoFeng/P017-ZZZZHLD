const express = require('express');
const router = express.Router();

const Data = require('../models/data');

router.post('/', (req, res, next) => {
    Data.addData(new Data({
      groupType: req.body.groupType,
      userAnswers: req.body.userAnswers,
      selectedValue: req.body.selectedValue
    }));
    console.log(req.body.answer);
    console.log(req.body.groupType);
    res.send('Get info !');
});

module.exports = router;