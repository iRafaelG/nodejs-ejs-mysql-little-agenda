// Importing the Router from Express

const { Router } = require('express');

// Router initialization

const router = Router();

// Imports routes controllers

const customerController = require('../controllers/customerController');

// Routes

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);
router.get('/delete/:id', customerController.delete);

// Export the module

module.exports = router;