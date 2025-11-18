import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
const app = express()

dotenv.config();

const port = process.env.PORT || 3000
const URI = process.env.mongoDBURI;

// Connecting to the data base 
try{
    mongoose.connect(URI)
    console.log("Connected to MongoDB");
}
catch(error){
    console.log("ERROR!!",error);
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})