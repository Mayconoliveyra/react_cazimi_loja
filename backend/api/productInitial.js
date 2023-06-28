module.exports = app => {
    getProduct = async (req, res) => {
        app.db("Cadastro de mercadorias")
            .select()
            .then(product => res.json(product))
            .catch(err => res.status(500).send(err))
    }

    return { getProduct }
}