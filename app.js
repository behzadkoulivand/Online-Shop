const express = require("express");
const dotEnv = require("dotenv");

const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errors");
const { setHeaders } = require("./middlewares/setHeaders");

// Config Folder
dotEnv.config({ path: "./config/config.env" });

// MongoDB Connection
connectDB();

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(setHeaders);

// Routes
app.use("/users", require("./routes/user"));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
