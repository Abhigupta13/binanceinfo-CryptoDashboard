const mongoose = require('mongoose')

const connect = async () => {
    try {

        const connect = await mongoose.connect("mongodb+srv://AKGROCKX:Akg%4013579@cluster-akg.qw0qmd8.mongodb.net/quadB-Tech", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected : ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

module.exports= connect;