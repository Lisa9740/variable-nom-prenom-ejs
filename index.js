const express = require('express');
const app = express();
var port = 3560;

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
   get_prenom(res);
    
})

  function get_prenom(res){
    var prenom = {prenom : "Alison"};

    res.render('index', 
   prenom );
    
};


  
  app.listen(port, function(){
    console.log('the port is on')
});
