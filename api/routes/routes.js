const { Router } = require('express');
const router = Router();
const brands = require('../controllers/brands');

// Equipment brands endpoint
router.get('/brands', brands.getEquipmentBrands);
router.get('/equipments', brands.getEquipmentList);
router.get('/users', brands.getUserList);
module.exports = router;