const {Router}=require('express')
const router=Router()


router.get('/',async(req,res)=>{
    let teachers= await Teacher.find().lean()
    let moderators= await Moderator.find().lean()
    res.render('page/status/status',{
        isAuthed:false,
        title:'Site Inforamtion',
        isStatus:true,
        teachers,
        moderators
    })
})

module.exports=router