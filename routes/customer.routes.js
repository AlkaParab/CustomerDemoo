var express = require('express');
var router = express.Router();

let customerController=require('../controller/customer.controller');


/* GET users listing. */
router.get('/', (req, res, next)=> {
let id=req.body.id
  customerController.getAllcustomers((customer)=>{
    res.send({error:false,data:customer});

  })
  
});

module.exports = router;
