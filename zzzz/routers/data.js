const express = require('express');
const router = express.Router();

const Data = require('../models/data');

router.post('/', (req, res, next) => {
    Data.addData(new Data({
      groupType: req.body.groupType,
      userAnswers: req.body.userAnswers,
      selectedValue: req.body.selectedValue,
      basicInfo: req.body.basicInfo,
      manipuCheck: req.body.manipuCheck
    }));
    res.send('Get info !');
});

module.exports = router;