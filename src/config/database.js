const mongoose = require('mongoose')

const connectionString = process.env.REACT_APP_DATA_BASE_URL;

// conexion a mongodb

const setDatabase = () => {
    mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected');
    }).catch(err => {
        console.error(err);
    })
}

module.exports = setDatabase