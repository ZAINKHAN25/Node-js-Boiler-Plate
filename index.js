import express from 'express';
import authroutes from './routes/authroutes.js'
var app = express();
var port = 5000;

app.use(express.json());

app.use('/auth', authroutes)



app.listen(port, ()=>{
    console.log(`Port is running on Port Number ${port}`);
})