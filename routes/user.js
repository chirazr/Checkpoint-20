const express=require('express')
const userRouter=express.Router()
const perso=require('../modeles/perso')


    //add new user
    userRouter.post('/add', async (req,res)=>{
        try {
            //create new user
            const userjdid=new perso (req.body)
            //save sajalt
            let resultat=await userjdid.save()
            res.send({newuser: resultat,msg:"user is added"})

        } catch (error) {
            console.log(error)
        }
    })

module.exports= userRouter