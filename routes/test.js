const express = require('express');
const router = express.Router();
const Test = require('../modules/test');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    let col = await Test.find()
    return res.send(col)
  } catch (e) {
    res.send({})
  }
});

router.post('/create', async (req, res, next) => {
  let product = new Test(
    {
      msg: req.body.msg,
    }
  );

  console.log(product)

  let result = await product.save();

  console.log(`result is ${JSON.stringify(result, null, 4)}`)

  res.send('Product Created successfully')
});

module.exports = router;
