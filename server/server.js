const express = require('express');
const bodyParser = require('body-parser');
var env = require('dotenv');
const app = express();
app.set('port',process.env.PORT || 3001);
app.use(bodyParser.json());

//models
var models = require('../app/models');
models.sequelize.authenticate().then(()=>{
    console.log("Database Conected!");
}).catch((err)=>{
    console.log(err);
});

//routes
require('../routes/api/indexRoute')(app);

app.listen(app.get('port'),(err) =>{
    if(!err)
    console.log('Server listen port: 3000');
    else console.log(err);
});