const News = require("../models/NewsModel");

const viewNews = async(req,res) => {
    const data = await News.find()
    res.json({
        data
    })
}

const addNews = async(req, res) => {
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

const updateNews = async (req,res) => {
    console.log('entro',req.body)
    // const userId = req.params.id
    const user = await News.find({_id: req.params.id})

    res.send(user)

}

module.exports = {
    addNews,
    viewNews,
    updateNews
}