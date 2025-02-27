'use strict'

//depends
const express = require('express');
const bodyParser = require('body-parser');
var env = require('dotenv');
const app = express();
const morgan = require('morgan');
const logger = require('winston');
const cors = require('cors');


//my depends
const NotFaund = require('../util/NotFound');
const Erro = require('../util/Error');

//init properties server
app.use(express.static('public'));


app.set('port',process.env.PORT || 8080);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use(cors());


//models
var models = require('../app/models');
models.sequelize.authenticate().then(()=>{
    console.log("Database Conected!");
}).catch((err)=>{
    console.log(err);
});


//routes
require('../routes/api/indexRoute')(app);

//error NotFaund 404
app.use((req, res, next) => {
    logger.info("Error: Route Not Faund");
    res.status(404).json(NotFaund);
  });
  
//Error Internal Server 500
  app.use( (err, req, res, next) => {
    Erro.message = err.message;
    logger.info(Erro);
    res.status(500).json(Erro);
  });

  
//Start server
app.listen(app.get('port'),(err) =>{
    if(!err)
    console.log('Server listen port: 3000');
    else console.log(err);
});