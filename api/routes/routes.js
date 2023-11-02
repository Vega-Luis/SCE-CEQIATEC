const { Router } = require('express');
const router = Router();
const brands = require('../controllers/brands');

// Equipment brands endpoint
router.get('/brands', brands.getEquipmentBrands);

module.exports = router;