const express = require('express');
const listaEmpresaNoticia = require('../models/noticia/dataList');
let router = express.Router();

router.use('/buscarListas',function(req,res,next){
    if(typeof req.query.lista == 'undefined'){
        res.status(404).end();
    }
    next();
});

router.get('/buscarListas',function(req,res,next){
    var listas = req.query.lista;
    var noticia = require("../models/noticia/r7");
    noticia.buscarNoticia();

res.end();
});





router.get('/lista', function(req, res, next) {
    var company = [];
    for(let i in listaEmpresaNoticia.list){
       company.push(i);
    }
    res.end(JSON.stringify({data:company,error:false})); 
});

router.get('/buscar',function(req,res){

});

module.exports = router;
