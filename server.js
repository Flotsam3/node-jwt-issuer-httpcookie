const { mongo } = require('mongoose');
express = require('express');
mongoose = require('mongoose');
const dotenv = require('dotenv');
cors = require('cors');

app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/' , require('./routes/user'));

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