const {Schema,model}=require('mongoose')

const vacancy=new Schema({
    title:String,
    location:String,
    count:Number,
    type:String,
    price:String,
    receiver_cv:String,
    description:String,
    human_resource:{
        type:Schema.Types.ObjectId,
        ref:'Stuff'
    }
})

module.exports=model('Vacancy',vacancy)