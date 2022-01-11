const express = require('express')
const router = express.Router()

const urlencodeParser = express.urlencoded({ extended: false })

const delete_user = require("../controllers/delete_user")
const create_user = require("../controllers/create_user")
const auth_user = require("../controllers/authentication_crud/auth")

router

    .post("/auth", auth_user.auth_user)
    
    .post("/user", urlencodeParser, create_user.create_user)

    .delete("/user/:id", urlencodeParser, delete_user.delete_user)


module.exports = router