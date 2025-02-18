const pool = require('./db')
const queries = require('./queries');

const getAccounts = async (req, res) => {
    try {
       const result = await pool.query(queries.getAccounts);
       res.json(result);
       console.log('my data', result);
    } catch (error) {
   console.error('error fetching accounts', error);     
    }
};

module.exports = {
    getAccounts,
};
