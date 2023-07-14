const mongoose = require('mongoose');
// const dotenv=require('dotenv');
// const path=require('path');
// dotenv.config({path:'config.env'});

const connectDB = async () => {
    try{
        
        const con = await mongoose.connect("mongodb://Raj:raj@cluster0-shard-00-00.br6qx.mongodb.net:27017,cluster0-shard-00-01.br6qx.mongodb.net:27017,cluster0-shard-00-02.br6qx.mongodb.net:27017/?ssl=true&replicaSet=atlas-geoosp-shard-0&authSource=admin&retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
            // mongoose.set('useNewUrlParser',true),
            // mongoose.set('useUnifiedTopology',true),
            // mongoose.set('useFindAndModify',false),
            // mongoose.set('useCreateIndex',true),

        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB  