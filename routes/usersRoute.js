const express = require('express')
const router = express.Router()

const knex = require('../models/config/conn_knex')
// const urlencodeParser = express.urlencoded({ extended: false })


router
    .get('/users', async (req, res) => {
        const rows = await knex.table('users')
        res.send(rows)
    })


module.exports = router