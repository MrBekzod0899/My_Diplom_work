const {Router}=require('express')
const router=Router()
const CompanyInfo=require('../model/company_info')
const upload=require('../middleware/file')

router.get('/',async(req,res)=>{
    let company_info=await CompanyInfo.find().lean()
    res.render('page/company_info/company_info',{
        isCompanyInfo:true,
        title:'CompanyInfo',
        company_info
    })
})

router.post('/',upload.single('Image'),async(req,res)=>{
    let {title,order,status}=req.body
    status=status || 0
    let Image='no photo'
    if(req.file){
        Image=req.file.path
    }
    let newCompanyInfo=await new CompanyInfo({title,order,status,Image})
    await newCompanyInfo.save()
    res.redirect('/company_info')
})


router.get('/delete/:id',async(req,res)=>{
    let _id=req.params.id;
    await CompanyInfo.findOneAndDelete({_id})
    res.redirect('/company_info')
    
})

router.get('/status/:id',async(req,res)=>{
    let _id=req.params.id
    let statusCompanyInfo=await CompanyInfo.findById(_id).lean()
    statusCompanyInfo.status=statusCompanyInfo.status==1 ? 0 : 1
    await CompanyInfo.findByIdAndUpdate(_id,statusCompanyInfo)
    res.redirect('/company_info')
})


router.get('/get/:id',async(req,res)=>{
    let _id=req.params.id
    let editCompanyInfo=await CompanyInfo.findOne({_id}).lean()
    res.send(editCompanyInfo)
})

router.post('/save',upload.single('Image'),async(req,res)=>{
    let {_id,title,order,status}=req.body
    status=status || 0
    let Image;
    if(req.file){
        Image=req.file.path
    }
    let editCompanyInfo=await CompanyInfo.findByIdAndUpdate(_id,{title,order,status,Image})
    await editCompanyInfo.save()
    res.redirect('/company_info')
})


module.exports=router