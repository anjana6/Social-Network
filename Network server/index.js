const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();

const authRouter = require('./routes/authRouter');
const postRouter = require('./routes/postRouter');
const profileRouter = require('./routes/ProfileRouter');


connectDB();

app.use(express.json({extended:false}));
app.use(cors());
app.use(fileUpload({useTempFiles:true}));


app.use('/auth',authRouter);
app.use('/post',postRouter);
app.use('/profile',profileRouter);

app.get("/",(req,res) => res.send("API Running"));

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server is start ${port}`));