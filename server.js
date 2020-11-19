const { mongo } = require('mongoose');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const passport = require('passport');
const jwtStrategy = require('./config/passport-jwt');

passport.use(jwtStrategy);
const app = express();
dotenv.config();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/user' , require('./routes/user'));
app.use('/dashboard', require('./routes/dashboard'));

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Successfully connected to the database!');
})
.catch((error)=>{
    console.log('Database connection failed!', error);
})

app.listen(3001, (err)=>{
    if (err) throw err;
    console.log('Server started at port 3001!');
})