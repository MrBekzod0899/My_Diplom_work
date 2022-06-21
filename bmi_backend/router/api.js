const { Router } = require('express')
const router = Router()
const upload =require('../middleware/file')
const Vacancy= require('../model/vakansiya')
const Attribute=require('../model/attribute')
const Product =require('../model/product')
const Category=require('../model/category')
//products

router.get('/getproducts', async(req, res) => {
    let Products = await Product.find().populate('category').populate('attributes.attribut').lean()
    console.log(Products)
    res.send(Products)
})

// product one

router.get('/product/:id', async(req, res) => {
    let Products = await Product.find({_id:req.params.id}).populate('category').populate('attributes.attribut').lean()
    let ProductAll = await Product.find({_id:{$ne:req.params.id}}).populate('category').populate('attributes.attribut').lean()
    let newProducts=[]
    newProducts.push(Products)
    newProducts.push(ProductAll)
    res.send(newProducts)
})

router.get('/getproducts/:id', async(req, res) => {
    let Products = await Product.find({ category: req.params.id }).populate('category').populate('attributes.attribut').lean()
    res.send(Products)
})


// vacancy

router.get('/vacancy',async(req,res)=>{
    let Vacancies= await Vacancy.find().lean()
    res.send(Vacancies)
})

router.get('/vacancy/:id',async(req,res)=>{
    let Vacancies= await Vacancy.find({_id:req.params.id}).lean()
    res.send(Vacancies)
})


//attribute
router.get('/getcat/:id', async(req, res) => {
    let Attributes = await Attribute.find({ category: req.params.id }).lean()
    res.send(Attributes)
})

//cat

router.get('/getcategory',async(req,res)=>{
    let Categories = await Category.find({status:1}).lean()
    res.send(Categories)
})



module.exports = router

    var express = require('express');
    var app = express();
        app.get('/', function (req, res) {
        res.send('Hello World');
        })
    var server = app.listen(8081, function ( ) {
    var host = server.address().address
    var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
        })