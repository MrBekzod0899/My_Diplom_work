const {Schema,model}=require('mongoose')

const company_info=new Schema({
    name:String,
    location:String,
    gmail:String,
    phone:[String],
    website:String,
    description:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=model('Company_Info',company_info)