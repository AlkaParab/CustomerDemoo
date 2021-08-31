let mysql=require('mysql');

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'customerdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('connection establish');
    }
})

module.exports=connection;