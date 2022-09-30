const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;

require("dotenv").config();

console.log(process.env.REDIRECT_URI);

app.use(cors());
app.use(express.json());
app.use(require("./routes/item-routes"));

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
