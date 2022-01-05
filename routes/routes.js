const express = require("express")
const urlencodeParser = express.urlencoded({ extended: false })
const knex = require('../models/config/conn_knex')

const authAPI = require("../controllers/authentication_crud/auth")
const registration_performedAPI = require("../controllers/authentication_crud/registration_performed")
const deleteAPI = require("../controllers/authentication_crud/delete")

module.exports = (app) => {


    //**********************  TESTES  ***************************** */


    app.get('/users', async (req, res) => {
        const rows = await knex('users')
        res.send(rows)
    })
    

    //************************************************************ */


    //Login
    app.get("/", (req, res) => {
        res.render('login', { layout: false })
        req.session.destroy()
    })

    app.post("/auth", authAPI.auth_user)

    //************************************************************** */


    //Cadastrar
    app.get("/register", (req, res) => {
        res.render('register', { layout: false })
        req.session.destroy()
    })

    app.post("/registration_performed", urlencodeParser, registration_performedAPI.insert_user)

    //************************************************************** */


    //Logged
    app.get("/Logged/:id", (req, res) => {
        if (req.session.loggedin === true) {

            res.render('Logged', { data: dados_user })
        } else {
            res.send(`<script>

                        alert('Por favor, insira o nome e a senha!');
                        history.back();

                      </script>`)
        }
    })

    //************************************************************** */


    //Delete    
    app.get("/delete/:id", (req, res) => {
        if (req.session.loggedin === true) {
            res.render('delete', { layout: false, data: dados_user })
        }
    })

    app.get("/del_acount/:id", urlencodeParser, deleteAPI.del_user)

    
}