const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');

const connectDB=require('./server/database/connection');

const app=express();
dotenv.config({path:'config.env'});
const port=process.env.PORT||8080;

app.use(morgan('tiny'));
connectDB();

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","ejs");
// __dirname=>directory wherer the file we r working on resides(current)
// vvv commented as no need to create dedicated folder for ejs
// app.set("views",path.resolve(__dirname,"views/ejs"));

app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


// app.get('/',(req,res)=>{
//     // res.send("Our Crud Application");
//     res.render('index.ejs');
// })

// app.get('/add-user',(req,res)=>{
//     // res.send("Our Crud Application");
//     res.render('add_user');
// })

// app.get('/update-user',(req,res)=>{
//     // res.send("Our Crud Application");
//     res.render('update_user');
// })

app.use('/',require('./server/routes/router'));

app.listen(port,()=>{
    console.log(`The server is up and running on http://localhost:${port}`);
});