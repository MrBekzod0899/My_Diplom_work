const { Router } = require("express");
const Category=require('../model/category')
const Attribute=require('../model/attribute')
const Stuff=require('../model/stuff')
const Product=require('../model/product')
const User=require('../model/user')
const Faq=require('../model/faqs')
const Vacancy=require('../model/vakansiya')


const router=Router()

router.get('/',async(req,res)=>{
    let Attributes=await Attribute.find().lean()
    let Categories=await Category.find().lean()
    let Stuffs=await Stuff.find().lean()
    let Faqs=await Faq.find().lean()
    let Vacancies=await Vacancy.find().lean()
    let Products=await Product.find().lean()
    let Users=await User.find().lean()

    res.render('index',{
        title:'Company Title',
        isHome:true,
        Attributes,
        Categories,
        Faqs,
        Users,
        Stuffs,
        Vacancies,
        Products
    })
})

module.exports=router