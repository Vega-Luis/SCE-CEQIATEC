const { getDBConnection } = require('../db-connection');
const { get } = require('../routes/routes');

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

module.exports.getEquipmentList = async(req, res) =>  {
    try {
        const { type, location, responsible } = req.body;
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .input('InEquipmentTypeName', type) 
            .input('InEquipmentLocationName', location)
            .input('InEquipmentResponsibleAlias', responsible)
            .execute('dbo.GetEquipmentList');
        res.json(result.recordset);
    } catch(error) {
        res.status(500).send(error.message);
    }
}

module.exports.getUserList = async(req, res) => {
    try {
        const pool = await getDBConnection();
        const result = await pool
            .request()
            .execute('dbo.GetUserList');
        res.json(result.recordset)
    } catch(error) {
        res.status(500).send(error.message);
    }
}