const connection=require('./mysql.connection');

module.exports={
    getAllcustomers:(callback) => {
        connection.query('SELECT CustID, City FROM customer',(err,result)=>{
            if(err){
                console.log(err);
            }else{
                callback(result);
            }
        })
    },
    getById:(id,callback) => {
        connection.query('SELECT CustID, City FROM customer where CustID=${id}',(err,result)=>{
            if(err){
                console.log(err);
            }else{
                callback(result);
            }
        })
    }
}