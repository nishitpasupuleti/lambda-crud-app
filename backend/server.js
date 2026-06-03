import express from "express";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors())

connectDB(); 

app.use('/tasks',taskRoutes);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is listening on the port ${PORT}`)
})

