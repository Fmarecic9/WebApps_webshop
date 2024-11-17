import express from "express"
import cors from "cors";



import proizvodiRouter from './routes/proizvodi.js'
import narudzbeRouter from './routes/narudzbe.js'



const app = express();

app.use(cors());
app.use('/narudzbe', narudzbeRouter)
app.use('/proizvodi', proizvodiRouter)

let PORT = 3000

app.listen(PORT,error=>{
    if(error){
        console.error("Doslo je do greske", error)

    }else{
        console.log(`Server runa na http://localhost:${PORT}`)
    }
})


app.get('/',(req,res)=>{
    res.status(200).json({message: "LMAO"})


})
