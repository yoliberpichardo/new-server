const res = require("express/lib/response");
const News = require("../models/NewsModel");

const postNews = async(req, res) => {
    console.log( req.body)
    const {title, description, important} = req.body
    const news = await new News({
        title,
        description,
        date: new Date(),
        important
    })

    news.save()
        .then(result => {
            return result
            mongoose.connection.close()
        })
        .catch(err => {
            console.error(err);
        })
        
    res.json([
        {
            news,
        },
    ])
    
    res.status(200).send("se hizo el post")
}

module.exports = {
    postNews
}