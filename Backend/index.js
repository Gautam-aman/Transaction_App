// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/mainrouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

//app.listen(3000);

app.listen(3000 , ()=>{
    console.log("Server Running")
})