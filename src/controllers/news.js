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
        })
        .catch(err => {
            console.error(err);
        })

    res.status(200).send("se agrego correctamente")
}

const updateNews = async (req,res) => {
    const userID = req.params.id
    const update = req.body
    console.log(update)
    const user = await News.findOneAndUpdate(userID,update,{
        returnOriginal: false
    })

    user.save()
        .then(result => {
            return result
        })
        .catch(err => {
            console.error(err);
        })

    res.status(200).send(`se actualizo correctamente`)

}

const deletNews = async (req,res) => {
    const userID = req.params.id
    const userDelet = await News.remove({ _id: userID }, (err) => {
        if(!err) {
            res.status(200).send(`se elimino correctamente`)
        }
        else{
            res.status(404).send(err)
        }
    })

    userDelet.save()
        .then(result => {
            return result
        })
        .catch(err => {
            console.error(err);
        })
    
}

module.exports = {
    addNews,
    viewNews,
    updateNews,
    deletNews
}