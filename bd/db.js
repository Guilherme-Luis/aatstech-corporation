/*npm i mysql2 // Instala o plugin do mysql*/
async function connect(){  // Cria o conexão com o banco mysql 
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection; 

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://bruno:bruno@localhost:3306/aatstech");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers(){  // Cria o comando select do bd
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM duvidas;');
    return rows;
}
 

async function insertCustomer(customer){ // cria a inserção na tabela
    const conn = await connect();
    const sql = 'INSERT INTO duvidas(duvida,email,telefone) VALUES (?,?,?);';
    const values = [customer.duvida, customer.email, customer.telefone];
    return await conn.query(sql, values);
}

async function updateCustomer(codDuv, customer){ // Atualiza a tabela 
    const conn = await connect();
    const sql = 'UPDATE duvidas SET duvida=?, email=?, telefone=? WHERE codDuv=?';
    const values = [customer.duvida, customer.email, customer.telefone, codDuv];
    return await conn.query(sql, values);
}
async function deleteCustomer(codDuv){
    const conn = await connect();
    const sql = 'DELETE FROM duvidas where codDuv=?;';
    return await conn.query(sql, [codDuv]);
}

module.exports = {selectCustomers, insertCustomer, updateCustomer, deleteCustomer};