const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).render('index.ejs')
})

const userRouter = require('./user')
router.use('/users', userRouter);

module.exports = router;