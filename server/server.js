const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const todoRoutes = require("./routes/todoRoutes");

const app = express();


// CONNECT DATABASE
connectDB();


// MIDDLEWARE
app.use(cors());
app.use(express.json());


// ROUTES
app.use("/api/todos", todoRoutes);


app.listen(5000, () => {
    console.log("Server running on port 5000");
});