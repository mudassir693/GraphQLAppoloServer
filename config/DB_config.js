

const mongoose = require('mongoose');


const connectDb = ()=>{
    mongoose.connect(process.env.MONGO_URL)
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