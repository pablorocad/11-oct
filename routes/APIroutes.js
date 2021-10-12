const { Router } = require('express');
const controller = require('../controller/Reports');
const router = Router();

router.get('/first',controller.firstReport);

module.exports = router;