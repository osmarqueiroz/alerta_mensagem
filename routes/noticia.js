var express = require('express');
var listaEmpresaNoticia = require('../models/noticia/dataList');
var router = express.Router();

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
