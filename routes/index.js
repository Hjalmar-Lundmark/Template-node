const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
    res.render('index.njk', {
        title: 'Template sida idk'
    })
})

module.exports = router;