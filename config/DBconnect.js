const mongoose=require('mongoose')

const connectdb= async ()=>{
    mongoose.connect(process.env.URLDB)
    try{
        await mongoose.connect(process.env.URLDB)
console.log("connected")
    } catch (error){ 
        console.log(error)
    }


}
module.export=connectdb