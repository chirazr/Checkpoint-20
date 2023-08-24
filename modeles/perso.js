const mongoose=require('mongoose')
const schema=mongoose.Schema

const persoSchema=new Schema(
    {
        name:{
        type:String,
        require:true

        },
        email:{
            type : String ,  
            require: true
        },

        phone:{
            type:string,
            require:false
        }

    }
)
const perso=mongoose.model(personel, persoSchema)
module.exports = perso