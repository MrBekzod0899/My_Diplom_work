const {Router}=require('express')
const router=Router()
const Stuff=require('../model/stuff')
const upload=require('../middleware/file')

router.get('/',async(req,res)=>{
    let stufs=await Stuff.find().lean()
    stufs=stufs.map(stuff=>{
        stuff.status===1 ?
        stuff.status=`<span class="badge badge-pill badge-success">faol</span>`
        : stuff.status=`<span class="badge badge-pill badge-danger">no faol</span>`
    return stuff
    })
    res.render('page/stuff/stuff',{
        isStuff:true,
        title:'Stuff',
        stufs
    })
})

router.post('/',upload.single('Image'),async(req,res)=>{
    let {title,order,status}=req.body
    status=status || 0
    let Image='no photo'
    if(req.file){
        Image=req.file.path
    }
    let newStuff=await new Stuff({title,order,status,Image})
    await newStuff.save()
    res.redirect('/stuff')
})


router.get('/delete/:id',async(req,res)=>{
    let _id=req.params.id;
    await Stuff.findOneAndDelete({_id})
    res.redirect('/stuff')
    
})

router.get('/status/:id',async(req,res)=>{
    let _id=req.params.id
    let statusStuff=await Stuff.findById(_id).lean()
    statusStuff.status=statusStuff.status==1 ? 0 : 1
    await Stuff.findByIdAndUpdate(_id,statusStuff)
    res.redirect('/stuff')
})


router.get('/get/:id',async(req,res)=>{
    let _id=req.params.id
    let editStuff=await Stuff.findOne({_id}).lean()
    res.send(editStuff)
})

router.post('/save',upload.single('Image'),async(req,res)=>{
    let {_id,title,order,status}=req.body
    status=status || 0
    let Image;
    if(req.file){
        Image=req.file.path
    }
    let editStuff=await Stuff.findByIdAndUpdate(_id,{title,order,status,Image})
    await editStuff.save()
    res.redirect('/stuff')
})


module.exports=router