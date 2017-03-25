var express = require('express');
var router = express.Router();
var baixarXML = require('../modelos/baixarxml.js').baixarXML;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/noticias',function(req, res, next){
  var url ="http://rss.home.uol.com.br/index.xml";
baixarXML(url,function(dados){
  
   var lista = dados.data.rss.channel.item;
   // console.log(dados.data.rss.channel.item);
   for(var i in lista){
     console.log("\n",lista[i],"\n"); 
     break;
   }
 });
  /* R7
   var url = 'http://noticias.r7.com/feed.xml';
 baixarXML(url,function(dados){
  
   var lista = dados.data.feed.entry;
  //  console.log(lista);
   for(var i in lista){
     console.log("\n",lista[i],"\n"); 
     
   }
 });*/
  /* padrão G1
   var url = 'http://pox.globo.com/rss/g1';
 baixarXML(url,function(dados){
   var lista = dados.data.rss.channel;
   for(var i in lista.item){
     console.log("\n",lista.item[i],"\n"); 
   }
 });*/


res.send('');
 

});

module.exports = router;
