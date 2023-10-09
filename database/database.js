const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://khushi:khushi@cluster0.s4mcpvg.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then((con) => {
      console.log("Connected to MongoDB server");
    });
};
module.exports = connectDatabase;
