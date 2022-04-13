var express = require('express');
var router = express.Router();
const Product = require("../modul/product");


router.post('./delete/:id',function (req,res) {
    Product.deleteOne({id: req.pragma.id},function (err) {
        if(err){
console.log(err)
        }
        console.log("deleted")
        res.redirect(300,'/list')
    })
})


module.exports = router;