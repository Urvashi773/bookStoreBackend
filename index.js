import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from 'nodemailer';


import bookRoute from "./route/book.route.js"
import userRoute  from "./route/user.route.js"
import sendmailRoute from "./route/sendmail.route.js"
import connectDB from "./config/db.js";

dotenv.config();
//db connected
connectDB()
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4000;

/* console.log(URI, "this is uri") */

// connect to mongoDB
/* async function connectToDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
    }
}

connectToDB(); */

//defining routes

app.use("/book" , bookRoute)
app.use("/user",userRoute)
app.use('/email',sendmailRoute)


app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
} )