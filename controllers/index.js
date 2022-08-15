const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const workRoutes = require('./workRoutes');

router.use('/', homeRoutes);
router.use('/work', workRoutes);

module.exports = router;
