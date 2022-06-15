const {Schema,model}=require('mongoose')

const stuff=new Schema({
    name:String,
    phone:String,
    gmail:String,
    login:String,
    password:String,
    age:Number,
    occupation:String,
    exprience:Number,
    resume:String,
    avatar:String,
    info:String,
    status:{
        type:Boolean,
        default:true
    },
})

module.exports=model('Stuff',stuff)