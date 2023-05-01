const express = require('express');
const empleeyeeRoutes = express.Router();


let Empleeyee = require('./empleeyee.model');

empleeyeeRoutes.route('/add').post(function (req,res){
    let empleeyee = new Empleeyee(req.body);
    empleeyee.save()
        .then(empleeyee => {
            res.status(200).json({'empleeyee' : 'new empleeyee is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

// empleeyeeRoutes.route('/:id').get(function (req, res){
//     let pCode = req.params.id;
//     console.log("your product code id is " +pCode);
//     empleeyee.findOne({$and:[{pCode : pCode}]},function (err,std){
//         if(err)
//             console.log(err);
//         else{
//             res.json(std)
//         }
//     });

// });

empleeyeeRoutes.route('/edit/:id').get(function (req,res){
    let id = req.params.id;
    Empleeyee.findById(id, function (err,empleeyee){
        res.json(empleeyee);
    });
});

empleeyeeRoutes.route('/update/:id').post(function (req,res){
    let id = req.params.id;
    Empleeyee.findById(id, function (err, empleeyee){
        if(!empleeyee)
            res.status(404).send("Data is not found??");
        else{
            empleeyee.name = req.body.name;
            empleeyee.age = req.body.age;
            empleeyee.mobile = req.body.mobile;
            empleeyee.tel = req.body.tel;
            empleeyee.email = req.body.email;
            empleeyee.posision = req.body.posision;
            empleeyee.adress = req.body.adress;
            empleeyee.password = req.body.password;
            empleeyee.cpassword = req.body.cpassword;
            empleeyee.status = req.body.status;
            empleeyee.empId = req.body.empId;
           
            empleeyee.save().then(business => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});


empleeyeeRoutes.route('/delete/:id').get(function(req,res){
    Empleeyee.findByIdAndRemove({_id:req.params.id}, function (err, customers){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

//get all details
// Define a route for getting all customers
empleeyeeRoutes.route('/getall').get(function(req, res) {
    // Find all documents in the 'Customer' collection
    Empleeyee.find(function(err, empleeyee) {
        if (err) {
            // If there was an error finding customers, log the error to the console
            console.log(err);
            // If customers were found successfully, return them as a JSON response
        } else {
            res.json(empleeyee);
        }
    });
});



empleeyeeRoutes.route('/login').post(function (req, res){
    let email = req.body.email;
    let password = req.body.password;

    let empleeyee = new Empleeyee(req.body);

    Empleeyee.findOne({$and:[{email : email},{password : password}]})
        .then(empleeyee => {
            if(empleeyee){
                empleeyee.name = req.body.name;
                res.status(200).send({
                    message: "Successful Login"
                });
            }
            else{
                res.status(200).send({
                    message: "User Not Found"
                });
            }
        })
});


empleeyeeRoutes.route('/search/:pathParam1?').get(function (req, res){
    let search = req.params.pathParam1;
    // let email = req.params.pathParam2;
    console.log("your search is "+search);

    // Orders.find({$and:[{date : search},{email : email}]},function (err,srch){
        Empleeyee.find({$and:[{$or: [{name: search}, {empId: search},{posision: search}]}]},function (err,srch){ 
        if(err)
            console.log(err);
        else{
            res.json(srch)
        }
    });

});



module.exports = empleeyeeRoutes;