require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to database :)");

    } catch (error) {
        console.error(error.message + ' Error in connecting to the database');
        process.exit(1);
    }
};

module.exports = connectDB;
