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
    console.log(req.body.userAnswers); //这里我把answer改成了userAnswers
    console.log(req.body.groupType);
    console.log(req.body.selectedValue);
    console.log(req.body.basicInfo);
    console.log(req.body.manipuCheck);
    res.send('Get info !');
});

module.exports = router;