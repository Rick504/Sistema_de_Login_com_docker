const knex = require('../models/config/conn_knex')

const delete_user = async (req, res) => {
    
    if (req.session.loggedin === true) {
        try {
            await knex('users').where({user_id: user_id}).del()

            res.status(200).json({ messege: 'user deleted successfully !!'})
            
        } catch (error) {

            res.status(404).json({ error: error })
        }
    }
}

module.exports = { delete_user }