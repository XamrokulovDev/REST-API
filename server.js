const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require("./routers/users.routers"))

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server ${PORT} portda ishlamoqda...`)
})