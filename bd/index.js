// (async () => {  /* Ver o que esta na tabela */
//     const db = require("./db");
//     console.log('Começou!');
//     console.log('SELECT * FROM DUVIDAS');
//      const duvidas = await db.selectCustomers();
//     console.log(duvidas);
// })();


(async () => {
    const db = require("../bd/db");
    console.log('Começou!');
    
    console.log('INSERT INTO duvidas');
    const result = await db.insertCustomer({duvida: "Zé", email: 'aattstt', telefone: "SP"});
    console.log(result);

    console.log('SELECT * FROM duvidas');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE INTO duvidas');
    const result2 = await db.updateCustomer(2,{duvida: "Zé", email: 'aattstt', telefone: "SP"});
    console.log(result2);

    console.log('DELETE FROM duvidas');
    const result3 = await db.deleteCustomer(2);
    console.log(result3);
})();