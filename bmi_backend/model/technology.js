const {Schema,model}=require('mongoose')

const technology=new Schema({
    name:String,
    photos:[String],
    description:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    price:Number,
    from:String,
    status:{
        type:Boolean,
        default:false
    }
})

module.exports=model('Technology',technology)