const { Router } = require('express')
const router = Router()
const upload =require('../middleware/file')
const Category= require('../model/category')


// Categry List Api url: http://localhost:8080/api/subject \\
// router.get('/subject', async(req, res) => {
//     const subjects = await Subject.find({ status: 1 }).lean()
//     res.send(subjects)
// })

// router.get('/teacher', async(req, res) => {
//     const teachers = await Teacher.find().populate('subject').lean()
//     res.send(teachers)
// })

// router.get('/category/:id', async(req, res) => {
//     const category = await Category.find({subject:req.params.id}).populate('subject').lean()
//     res.send(category)
// })

// //post  teacher file

// router.post('/teacher',upload.single('file'),async(req,res)=>{
//     const {teacher,variant}=req.body 
//     let newTeacher=await Teacher.find({_id:teacher}).lean()
//     let reqfile=''
//     if(req.file){
//         reqfile=req.file.path
//     }
//     let files={
//         variant_name:variant,
//         file:reqfile
//     } 
//     newTeacher[0].files.push(files)
//     await Teacher.findByIdAndUpdate(teacher,{files:newTeacher[0].files})

//     res.redirect('http://localhost:3000/teacher')
// })


// router.get('/test', async(req, res) => {
//     const test = await Test.find().populate('teacher').populate('category').lean()
//     res.send(test)
// })

// router.post('/test',upload.single('file'),async(req, res) => {
//     const {teacher,subject,variant}=req.body
//     let test=await Teacher.find().lean()
//     console.log(req.file)
//     let file=''
//     if(req.file){
//         file=req.file.path
//     }
//     const newTest=await new Test({teacher,subject,variant,file})
//     console.log(newTest)
//     newTest.save();
//     res.redirect('http://localhost:3000/teacher')
// })


module.exports = router