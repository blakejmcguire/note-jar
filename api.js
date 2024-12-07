const express = require('express')
const router = new express.Router()

router.post('/new', (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

module.exports = router