const express = require("express");

const connectDB = require("./config/db");

// MongoDB Connection
connectDB();

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/users", require("./routes/user"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
