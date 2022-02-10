const express = require("express");
const { addNews, updateNews, viewNews, deletNews } = require("../controllers/news");
const Router = express.Router

const router = Router()

router.get('/', viewNews)
router.post('/', addNews)
router.put('/:id', updateNews)
router.delete('/:id', deletNews)


module.exports = router