const connection = require("../config/db");

async function storeUser(request, response) {
   
    console.log(request.body)
  
    const params = Array(
        request.body.name,
        request.body.senha,
        request.body.email 
    );

    const query = "INSERT INTO users(name, password, email) VALUES(?, ?, ?)";

    connection.query(query, params, (err, results) => {
        console.log (err,results)
        if (results) {
             response
                  .status(200)
                  .json({
                    success: true,
                    message: 'Sucesso',
                    data: results
                  })
         } else {
              response
                  .status(400)
                  .json({
                    success: false,
                    message: 'Sem sucesso',
                    sql: err
                })
         }
    })

}

module.exports = {
    storeUser
}
