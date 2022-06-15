const {Schema,model}=require('mongoose')

const vakansiya=new Schema({
    title:String,
    quantity:Number,
    price:String,
    receiver_cv:String,
    description:String,
    human_resource:{
        type:Schema.Types.ObjectId,
        ref:'Stuff'
    }
})

module.exports=model('Vakansiya',vakansiya)