var express = require('express');
var router = express.Router();
// router.use(express.static('public'));
var mongodb = require('mongodb');

// Módulo para leer encuestas
// const cSurvey=requiere('../rest/readSurvey');

var server = new mongodb.Server("127.0.0.1", 27017, {});
var dbSurvey = new mongodb.Db('ffiSurvey', server, {})

// abrimos la base pasando el callback para cuando esté lista para usar
dbSurvey.open(function (error, client) {
    if (error) throw error;

    var collection = new mongodb.Collection(client, 'encuestas');

    //disparamos un query buscando la persona que habiamos insertado por consola
    collection.find({'Nombre': 'Prueba'}).toArray(function(err, docs) {

        //imprimimos en la consola el resultado
        console.dir(docs);
    });

});
console.log("OK");
    /* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
