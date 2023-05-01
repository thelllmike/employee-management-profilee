const express = require('express');
const empleeyeeDetailsRoutes = express.Router();


let Empleeye = require('./empleeyee.model');

empleeyeeDetailsRoutes.route('/:id').get(function (req, res){
    let email = req.params.id;
    console.log(email);
    Empleeye.findOne({$and:[{email : email}]},function (err,cus){
        if(err)
            console.log(err);
        else{
            res.json(cus)
        }
    });

});


module.exports = empleeyeeDetailsRoutes;

