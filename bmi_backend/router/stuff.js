const {Router}=require('express')
const router=Router()
const Stuff=require('../model/stuff')
const upload=require('../middleware/file')

router.get('/',async(req,res)=>{
    let stuffs=await Stuff.find().lean()
    stuffs=stuffs.map(stuff=>{
        stuff.status ?
        stuff.status=`<span class="badge badge-pill badge-success">faol</span>`
        : stuff.status=`<span class="badge badge-pill badge-danger">no faol</span>`
        
    return stuff
    })

    res.render('page/stuff/stuff',{
        isStuff:true,
        title:'Stuff',
        stuffs
    })
})

router.post('/',upload.fields([
    {
        name:'avatar',maxCount:1
    },
    {
        name:'resume',maxCount:1
    }
]),async(req,res)=>{
    let {name,phone,gmail,age,occupation,status}=req.body
    console.log(req.body)
    status=status || 0
    let {avatar,resume}=req.files
    let image=''
    let cv=''
    if(avatar){
        image=avatar[0].path
    } 
    if(resume){
        cv=resume[0].path
    }
    console.log(req.files)
    let newStuff=await new Stuff({name,phone,gmail,age,occupation,status,resume:cv,avatar:image})
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