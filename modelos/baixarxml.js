var http = require('http');
var parser = require('xml2json');

module.exports.baixarXML = function(url,callback){

  return http.get(url,function(result){
    var rawData = '';
    result.on('data', (chunk) => rawData += chunk);
    result.on('end', () => {
      try {
        var nodeParse = JSON.parse(parser.toJson(rawData));
          callback({error:false,data:nodeParse});
       
      
      } catch (e) {
        callback({error:true,data:e.message});
      }
    });
  });

}