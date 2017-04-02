let manipularNoticia = require('../baixarxml');
let lista = require('./dataList').list;
let noticiaBase = require('./modeloNoticia');

let padronizar = function(noticias){    
  let listaNoticias = [];
  try {
    if(noticias.error == true){
       throw new Error(noticias.data);
    }

    for(var noticia of noticias.data.feed.entry){
      let padronizaNoticia = noticiaBase; 

      padronizaNoticia.titulo = noticia.title.$t;
      padronizaNoticia.data = noticia.published;
      padronizaNoticia.origem = noticia.author.name;
      listaNoticias.push(padronizaNoticia);
      
    }
  } catch (error) {
    
  }
  return listaNoticias;
}

let url = lista.R7;
module.exports.buscarNoticia = function(){
   manipularNoticia.baixarXML(url).then(function(res){
    console.log(res);
   });
} 

