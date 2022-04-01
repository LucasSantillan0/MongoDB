require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 3030,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    MONGODB_CNN : process.env.DB_CNN
}