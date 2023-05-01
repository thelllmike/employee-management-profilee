const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./DB.js');


const emplooyeeRoutes = require('./emplooyee.route.js');
const emplooyeedetailRoutes = require('./employe.detail.route.js');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(
    ()=> {console.log('Database is connected')},
        err =>{console.log('Can not connect database'+err)}
);

app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use('/emplooyee',emplooyeeRoutes);
app.use('/profile',emplooyeedetailRoutes);



app.listen(PORT, function(){
    console.log('Server is running on port: ',PORT);
});