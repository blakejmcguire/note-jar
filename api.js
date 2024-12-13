const express = require('express')
const router = new express.Router()

router.post('/note/new', (req, res) => {
    console.log('test')
    console.log(req.body)
    res.sendStatus(200)
})

module.exports = router