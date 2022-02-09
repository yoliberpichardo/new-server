const express = require("express");
const { postNews } = require("../controllers/addNews");
const { getNews } = require("../controllers/newsController");
const Router = express.Router

const router = Router()

router.get('/', getNews)
router.post('/', postNews)


module.exports = router