const { Router } = require("express");

const router=Router()
const Faqs=require('../model/faqs')

router.get('/',async(req,res)=>{
    res.render('page/faqs/faqs',{
        title:'Question_Answer',
        isFaqs:true
    })
})

module.exports=router