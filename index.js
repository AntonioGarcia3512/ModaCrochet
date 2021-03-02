const express = require('express');

//Inizializations
const app = express();

//Setting
app.set('port', process.env.PORT || 3000);

//Middlewares

//Global Variables

//Routes

//Static Files

//Server listening
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
