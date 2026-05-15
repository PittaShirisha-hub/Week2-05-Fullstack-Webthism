const mongoose = require("mongoose");

const connectDB = async () => {

    console.log("Connecting MongoDB...");

    try {

        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB Connected");

    } catch (error) {

        console.log("MongoDB Error");

        console.log(error.message);
    }
};

module.exports = connectDB;