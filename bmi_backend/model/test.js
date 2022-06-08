const {Schema, model}=require('mongoose')

const test=new Schema({
    teacher:{
        type:Schema.Types.ObjectId,
        ref:'Teacher'
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    variant:{
        type:String
    },
    qiyinchilik:{
        type:Number,
        enum:[1,2,3],
        default:1
    },
    test_text:{
        question:String,
        variant_a:String,
        variant_b:String,
        variant_c:String,
        variant_d:String,
        answer:String
    },
    status:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=model('Test',test)