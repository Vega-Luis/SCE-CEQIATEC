const { getDBConnection } = require('../db-connection');

module.exports.getEquipmentBrands = async(req, res) => {
    try {
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .query('dbo.GetEquipmentBrands');
        res.json(result.recordset);
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}