const app = require("./app");
const connectDatabase = require("./database/database");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;
connectDatabase();

app.listen(PORT, () => {
  console.log("Server Started");
});
