const {Router}=require('express')
const router=Router()
const Vacancy=require('../model/vakansiya')

router.get('/',async(req,res)=>{
    let Vacancies=await Vacancy.find().lean() 
    res.render('page/vakansiya/vakansiya',{
        isAuthed:true,
        isVacancy:true,
        title:'Our Vacancy',
        Vacancies
    })
})

router.post('/',async(req,res)=>{
    const {title,price,count,description,location,type}=req.body
    let newVacancy=await new Vacancy({title,price,count,description,location,type})
    await newVacancy.save()
    res.redirect('/vacancy')
})

//delete vacancy

router.get('/delete/:id', async(req, res) => {
    let _id = req.params.id;
    await Vacancy.findOneAndDelete({ _id })
    res.redirect('/vacancy')
})

router.get('/get/:id', async(req, res) => {
    let _id = req.params.id
    let editVacancy = await Vacancy.findOne({ _id }).lean()
    res.send(editVacancy)
})

router.post('/save', async(req, res) => {
    let { _id, title, price, count, description,location,type } = req.body
    await Vacancy.findByIdAndUpdate(_id, { title, price, count, description,location,type})
    res.redirect('/vacancy')
})


module.exports=router