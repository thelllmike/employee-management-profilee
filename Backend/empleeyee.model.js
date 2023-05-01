/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Empleeyee = new Schema({
    name: {
        type: String
    },
    age: {
        type: String
    },
    mobile: {
        type: String
    },
    tel: {
        type: String
    },
    email: {
        type: String
    },
    
    posision: {
        type: String
    },
    adress: {
        type: String
    },
    password: {
        type: String
    },
    cpassword: {
        type: String
    },
     status: {
        type: String
    }
    ,
     status: {
        type: String
    } ,
    empId: {
       type: String
   }

 },
  {
    collation: 'empleeyee'
});

module.exports = mongoose.model('Empleeyee',Empleeyee);