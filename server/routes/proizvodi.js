import express from "express"
import {Proizvod, proizvodi} from '../data.js'

const router = express.Router()


router.get('/',(req,res)=>{
    res.status(200).json(proizvodi)

})

router.get('/:id',(req,res)=>{
    const id_proizvoda  = req.params.id;


    if (isNaN(id_proizvoda)){
        res.status(400).json({message:"ID nije valjan"})
        return
    }
    const proizvodPronadjen = proizvodi.find(p => p.id == id_proizvoda)

    if(!proizvodPronadjen){
        res.status(404).json({message:"Nema proizvoda"})
    }
    res.status(200).json(proizvodPronadjen)
})

export default router