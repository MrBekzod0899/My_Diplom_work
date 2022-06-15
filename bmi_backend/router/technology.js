const {Router}=require('express')
const router=Router()
const Technology=require('../model/technology')
const upload=require('../middleware/file')

router.get('/',async(req,res)=>{
    let technologies=await Technology.find().lean()
    technologies=technologies.map(technology=>{
        technology.status===1 ?
        technology.status=`<span class="badge badge-pill badge-success">faol</span>`
        : technology.status=`<span class="badge badge-pill badge-danger">no faol</span>`
    return technology
    })
    res.render('page/technology/technology',{
        isTechnology:true,
        title:'Technology',
        technologies
    })
})

router.post('/',upload.single('Image'),async(req,res)=>{
    let {title,order,status}=req.body
    status=status || 0
    let Image='no photo'
    if(req.file){
        Image=req.file.path
    }
    let newTechnology=await new Technology({title,order,status,Image})
    await newTechnology.save()
    res.redirect('/technology')
})


router.get('/delete/:id',async(req,res)=>{
    let _id=req.params.id;
    await Technology.findOneAndDelete({_id})
    res.redirect('/technology')
    
})

router.get('/status/:id',async(req,res)=>{
    let _id=req.params.id
    let statusTechnology=await Technology.findById(_id).lean()
    statusTechnology.status=statusTechnology.status==1 ? 0 : 1
    await Technology.findByIdAndUpdate(_id,statusTechnology)
    res.redirect('/technology')
})


router.get('/get/:id',async(req,res)=>{
    let _id=req.params.id
    let editTechnology=await Technology.findOne({_id}).lean()
    res.send(editTechnology)
})

router.post('/save',upload.single('Image'),async(req,res)=>{
    let {_id,title,order,status}=req.body
    status=status || 0
    let Image;
    if(req.file){
        Image=req.file.path
    }
    let editTechnology=await Technology.findByIdAndUpdate(_id,{title,order,status,Image})
    await editTechnology.save()
    res.redirect('/technology')
})


module.exports=router