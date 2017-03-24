var express = require('express');
var router = express.Router();
var http = require('http');
var xml2js = require('xml2js').parseString;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/noticias',function(req, res, next){
  
  var url = 'http://pox.globo.com/rss/g1';
  
 http.get(url,function(response){
    var dadosString = "";
    response.on("data",function(dados){
      dadosString += dados;
      console.log(dados);
    });
    res.on('end', () => {
      console.log(dadosString);
      xml2js(dadosString,function(err,result){
        console.log(err,result);  
      });
    });
 });
 

res.send('respond with a resource');
});

module.exports = router;
