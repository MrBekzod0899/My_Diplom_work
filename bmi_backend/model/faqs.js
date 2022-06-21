const {Schema,model}=require('mongoose')

const faqs=new Schema({
    question:String,
    cretedAt:{
        type:Date,
        default:Date.now()
    },
    answer:String,
    comments:[String],
    status:{
        type:Boolean,
        default:false
    }
})

module.exports=model('Faqs',faqs)