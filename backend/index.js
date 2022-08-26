const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');

//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require('./routes/posts')

dotenv.config();
app.use(cors({
  origin: "http://localhost:3000"
}))

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, (err) => {
  if (err) console.log(err);
  else console.log("Connected to DB");
});

//Middlewares
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use('/api/posts', postRoute)

app.listen(5000, () => console.log(`Server is up and running!`));
