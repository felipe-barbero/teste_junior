const express = require('express');
const router = express.Router();

const companyController = require('./controllers/companyController');

router.post('/company/create', companyController.create);
router.get('/company/getAll', companyController.getAll);
router.post('/company/edit/:id', companyController.edit);
router.get('/company/eliminate/:id', companyController.eliminate);

module.exports = router;