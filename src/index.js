//required('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import {app} from "./app.js"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
})













connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8008,()=>{
        console.log("Server is running on port process.env.PORT");
    })
})
.catch((err) => {
    console.error("MONGO DB CONNECTION FAILED !!! " ,err);
    process.exit(1);
    })







// import express from "express"
// const app = express()
// (async()=>{
//     try {
//         await mongoose.connect( '${process.env.MONGODB_URI}/{DB_NAME}')
//           app.on("error",(error)=>{
//    console.log("ERRR:",error);
//    throw error
//           })
//           app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//           })
//         }
    
//         catch(error){
//             console.log(error);
//             throw err
//         }

// })()