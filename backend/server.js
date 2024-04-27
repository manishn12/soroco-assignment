const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDatabase = require("./configs/database");
const todoRoutes = require("./routes/todoRoutes");
const errorMiddleware = require("./middleware/error");

const app = express();

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting the Server");
  process.exit(1);
});

dotenv.config({ path: "config.env" });

//Connect to Database
connectDatabase(process.env.MONGODB_URL);

app.use(express.json());
app.use(cors()); // Enable CORS
app.use("/api", todoRoutes);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

//Unhandled Promise Rejection which raise error but not stop server, in this case if have to stop the server
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting the Server");
  server.close(() => {
    process.exit(1);
  });
});
