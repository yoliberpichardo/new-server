const News = require("../models/NewsModel");

const getNews = async(req,res) => {
    const data = await News.find()
    res.json({
        data
    })
}

module.exports = {
    getNews
}

// const viewNew = News.find()
//         .then(result => {
//             console.log(result);
//             return result
//             // mongoose.connection.close()
//         })



// const news = new News({
//     title:'Hola primera prueba',
//     description: 'hola soy un intento de esquema',
//     date: new Date(),
//     important: false
// })

// news.save()
    // .then(result => {
    //     console.log(result);
    //     mongoose.connection.close()
    // })
    // .catch(err => {
    //     console.error(err);
    // })