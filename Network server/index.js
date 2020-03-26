const express = require('express');
const connectDB = require('./config/db');

const authRouter = require('./routes/authRouter');

const app = express();

connectDB();

app.use(express.json({extended:false}));
app.use('/auth',authRouter);

app.get("/",(req,res) => res.send("API Running"));

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server is start ${port}`));