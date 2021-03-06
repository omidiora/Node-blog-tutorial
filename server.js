const express =require('express');
const cors= require('cors');
const mongoose=require('mongoose');
require('dotenv').config();


const app =express()
app.use(cors());
app.use(express.json());

const PORT =process.env.PORT || 8000;

app.listen(PORT , ()=>console.log(`Server started on port ${PORT}`));


app.use("/posts" , require('./routes/postRoutes'))

mongoose.connect(process.env.MONGODB_URI , {useNewUrlParser:true , useUnifiedTopology:true}, err=>{
    if(err) return console.log(err);
    console.log("MongDb connection estabilished");
})