var http = require('http');
var parser = require('xml2json');

module.exports.baixarXML = function(url){
  return new Promise(function(resolve,reject){
    http.get(url,function(result){
      var rawData = '';
      result.on('data', function(chunk) {
        rawData += chunk;
      });
      result.on('end', function(){
        try {
          var nodeParse = JSON.parse(parser.toJson(rawData));
          resolve({error:false,data:nodeParse});
        } catch (e) {
          reject({error:true,data:e.message});
        }
      });   
    });
  });
}