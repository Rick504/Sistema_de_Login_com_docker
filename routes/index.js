module.exports = (app) => {

    //Login
    app.get("/", (req, res) => {
        res.render('login', { layout: false })
        req.session.destroy()
    })

    //Cadastrar
    app.get("/register", (req, res) => {
        res.render('register', { layout: false })
        req.session.destroy()
    })

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

    //Delete    
    app.get("/del_user", (req, res) => {
        if (req.session.loggedin === true) {
            res.render('delete', { layout: false, data: dados_user })
        }
    })
}
