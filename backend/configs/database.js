const mongoose = require("mongoose");

const connectDatabase = (MONGODB_URL) => {
  mongoose.connect(MONGODB_URL).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  });
};
module.exports = connectDatabase;
