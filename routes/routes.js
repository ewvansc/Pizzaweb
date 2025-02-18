const {Router} = require('express');
const controller = require('../controller');

const router = Router();
router.get ('/', controller.getAccounts); //this is to get all accounts
 

module.exports = router; 