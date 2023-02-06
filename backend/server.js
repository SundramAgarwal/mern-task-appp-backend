const dotenv = require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery',false);

const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors")



const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ["http://localhost:3000", "https://mern-task-appp.onrender.com"]
}));
app.use("/api/tasks",taskRoutes)

// const logger = (request,response,next) => {
//     console.log("Middleware ran");
//     console.log(request.method);
//     next();
// };

//Routes
app.get("/",(request,response) => {
    response.send("Home Page")
});


const PORT = process.env.PORT || 5000

//method 2 to connect to the database (easy method)
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`MongoDB Connected!`);
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        });
    })
    .catch((error) => console.log(error));


// 32 video completed
