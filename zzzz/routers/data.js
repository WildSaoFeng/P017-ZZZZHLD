const express = require('express');
const router = express.Router();

const Data = require('../models/data');

router.post('/', (req, res, next) => {
    Data.addData(new Data({
      id: req.body.id,
      answer: req.body.answer,
    }));
    console.log(req.body.answer);
    res.send('Get info !');
});

module.exports = router;