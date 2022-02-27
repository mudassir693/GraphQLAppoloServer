

const mongoose = require('mongoose');


const connectDb = ()=>{
    console.log('Hello: ',process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('DB Connected')
        process.exit(0);
    })
    .catch(err=>{
        console.log(err)
        process.exit(1)
    })
    // 
}

module.exports = connectDb