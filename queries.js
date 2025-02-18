const getAccounts = "SELECT * from accounts";
const getAccountsById = "select * from accounts where accountId = $1";
const addAccount = "insert into accounts(name,city,state,type) Values($1,$2,$3,$4";

module.exports = {
    getAccounts,
};