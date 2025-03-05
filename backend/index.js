const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

const app = express();

// ✅ Middleware
app.use(express.json()); // Enables JSON request body parsing
app.use(cors()); // Allows frontend and backend communication

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("✅ MongoDB Connected");
});

// ✅ Load Routes
app.use("/api", require("./routes/authRoutes")); // Authentication routes

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
