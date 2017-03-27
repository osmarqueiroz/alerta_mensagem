const express = require('express');
const listaEmpresaNoticia = require('../models/noticia/dataList');
let router = express.Router();


router.use('/buscar',function(req,res,next){
next();
});





router.get('/', function(req, res, next) {
    var company = [];
    for(let i in listaEmpresaNoticia.list){
       company.push(i);
    }
    res.end(JSON.stringify({error:false,data:company})); 
});

router.get('/buscar',function(req,res){

});

module.exports = router;
