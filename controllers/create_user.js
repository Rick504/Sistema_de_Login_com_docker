const knex = require('../models/config/conn_knex')

const create_user = async (req, res) => {
    try {
        const dados_user = {
            u_name: req.body.u_name,
            email: req.body.email,
            password: req.body.password,
        }

        await knex('users').insert(dados_user)

        res.render('registration_performed', { layout: false })

        res.status(201)
        
    } catch (error) {

        res.status(404).json({ error: error })
    }
}

module.exports = { create_user }

