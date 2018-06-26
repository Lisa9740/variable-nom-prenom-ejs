const express = require('express');
const app = express();
var port = 3560;

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    // création de la variable prenom
    var prenom = {prenom : "Alison"};
   
    get_prenom(function(prenom){
        //console.log(hotels); 
    })
    res.render('index', {
        prenom: prenom
    });
    //   res.render('index', prenom );
  });

  function get_prenom(cb,result){

  cb (result);
}

  
  app.listen(port, function(){
    console.log('the port is on')
});
