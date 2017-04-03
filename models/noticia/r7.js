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
      var data = new Date(noticia.published);
      listaNoticias.push({
        titulo : noticia.title.$t,
        data : data.getDay()+'/'+data.getMonth()+'/'+data.getFullYear()+'-'+data.getHours()+':'+data.getMinutes(),
        origem : noticia.author.name
            });      
    }
  } catch (error) {
    
  }
  return listaNoticias;
}

let url = lista.R7;
module.exports.buscarNoticia = function(){
   return manipularNoticia.baixarXML(url).then(function(resposta){       
      return padronizar(resposta);    
    });
}


