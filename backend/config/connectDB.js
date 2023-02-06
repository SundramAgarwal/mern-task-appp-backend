
// use this code in server.js to connect to mongoDB and start server


const mongoose = require("mongoose");
mongoose.set('strictQuery',false);

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);

        // console.log(`MongoDB Connected: ${connect.connection.host}`);
        console.log(`MongoDB Connected!`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
};

module.exports = connectDB;



// //method 1 to connect to the database
// const startServer = async () => {
//     try {
//         await connectDB();
//         app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//     } catch (error) {
//         console.log(error);
//     }
// };

// startServer();
