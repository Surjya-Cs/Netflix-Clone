import express, { urlencoded } from 'express'
import dotenv from "dotenv"
import dbConnection from './utils/dbConnection.js';
import cookieParser from 'cookie-parser';
import userRoute from './Routes/userRoute.js';
import cors from 'cors'

dotenv.config({
    path:".env"
})

const app = express();
dbConnection();


//middleware
app.use(urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}))

//api
app.use("/api/v1/user",userRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server listen on port : ${process.env.PORT}`);
})