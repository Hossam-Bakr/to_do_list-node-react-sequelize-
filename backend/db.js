require('dotenv').config(); // Ensure this is at the top
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
        dialect: 'mysql',
        host: process.env.DB_HOST  , 
        logging :false
    }
);

const connectToDb = async () => {
    try {
        await sequelize.sync({ force: true })
        //  await sequelize.sync();
        console.log("Successfully connected to the database.");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
}

module.exports = { sequelize, connectToDb };
